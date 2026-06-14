import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Plus, Search, Edit, Trash2, FileSpreadsheet, Loader } from 'lucide-react'
import { Button } from '../../components/ui/Form'
import { Table } from '../../components/ui/Table'
import BulkProductModal from '../../components/BulkProductModal'
import { useProducts } from '../../hooks/useProducts'
import { useCategories } from '../../hooks/useCategories'
import { useAlert } from '../../components/ui/AlertContext'
import api from '../../api/client'
import { formatPrice } from '../../lib/utils'

export default function Products() {
  const navigate = useNavigate()
  const Alert = useAlert()
  const [search, setSearch] = useState('')
  const [categoryId, setCategoryId] = useState('')
  const [page, setPage] = useState(1)
  const [bulkOpen, setBulkOpen] = useState(false)
  const [toggling, setToggling] = useState(null)

  const params = { page, limit: 20, search, ...(categoryId && { categoryId }) }
  const { products, total, totalPages, loading, refetch, updateProduct } = useProducts(params)
  const { categories } = useCategories()

  const handleToggleStatus = async (e, product) => {
    e.stopPropagation()
    const newStatus = product.status === 'active' ? 'draft' : 'active'
    setToggling(product.id)
    try {
      await api.put(`/admin/products/${product.id}`, { status: newStatus })
      updateProduct(product.id, { status: newStatus })
    } catch (err) {
      Alert.fire({ message: 'Error al cambiar estado', type: 'error' })
    } finally {
      setToggling(null)
    }
  }

  const handleDelete = async (product) => {
    const result = await Alert.fire({
      title: '¿Eliminar producto?',
      message: `"${product.name}" se eliminará permanentemente.`,
      type: 'warning',
      variant: 'modal',
      showCancelButton: true,
      confirmButtonText: 'Eliminar',
      cancelButtonText: 'Cancelar',
    })
    if (!result.isConfirmed) return
    await api.delete(`/admin/products/${product.id}`)
    refetch()
  }

  const columns = [
    {
      header: 'Producto',
      accessor: (p) => (
        <div className="flex items-center gap-3">
          {p.images?.[0] ? (
            <img src={p.images[0]} alt="" className="w-10 h-10 rounded-lg object-cover bg-zinc-800 shrink-0" />
          ) : (
            <div className="w-10 h-10 rounded-lg bg-zinc-800" />
          )}
          <div>
            <p className="font-medium text-zinc-200">{p.name}</p>
            <p className="text-xs text-zinc-500">{p.slug}</p>
          </div>
        </div>
      ),
    },
    { header: 'Categoría', accessor: (p) => p.category?.name || '—' },
    { header: 'Precio', accessor: (p) => formatPrice(p.retailPrice) },
    {
      header: 'Estado',
      accessor: (p) => (
        <button
          onClick={(e) => handleToggleStatus(e, p)}
          disabled={toggling === p.id}
          className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium border transition-colors cursor-pointer min-w-[90px] justify-center
            ${p.status === 'active'
              ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30 hover:bg-emerald-500/20'
              : 'bg-amber-500/10 text-amber-400 border-amber-500/30 hover:bg-amber-500/20'
            } disabled:opacity-50`}
        >
          {toggling === p.id ? (
            <Loader className="w-3 h-3 animate-spin" />
          ) : (
            <span className={`w-2 h-2 rounded-full ${p.status === 'active' ? 'bg-emerald-400' : 'bg-amber-400'}`} />
          )}
          {p.status === 'active' ? 'Activo' : 'Borrador'}
        </button>
      ),
    },
    {
      header: 'Acciones',
      accessor: (p) => (
        <div className="flex items-center gap-1">
          <button onClick={(e) => { e.stopPropagation(); navigate(`/dashboard/products/${p.id}/edit`) }} className="p-1.5 rounded-lg text-zinc-400 hover:text-cyan-400 hover:bg-cyan-500/10 transition-colors">
            <Edit className="w-4 h-4" />
          </button>
          <button onClick={(e) => { e.stopPropagation(); handleDelete(p) }} className="p-1.5 rounded-lg text-zinc-400 hover:text-red-400 hover:bg-red-500/10 transition-colors">
            <Trash2 className="w-4 h-4" />
          </button>
        </div>
      ),
    },
  ]

  return (
    <div className="max-w-7xl mx-auto">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-bold text-zinc-100">Productos</h1>
          <p className="text-sm text-zinc-500">{total} productos</p>
        </div>
        <div className="flex items-center gap-3">
          <Button variant="secondary" onClick={() => setBulkOpen(true)}>
            <FileSpreadsheet className="w-4 h-4" />
            Creación masiva
          </Button>
          <Link to="/dashboard/products/new">
            <Button>
              <Plus className="w-4 h-4" />
              <span className="hidden sm:inline">Nuevo Producto</span>
              <span className="sm:hidden">Nuevo</span>
            </Button>
          </Link>
        </div>
      </div>

      {/* Filters */}
      <div className="flex gap-3 mb-6">
        <div className="relative flex-1 max-w-xs">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-500" />
          <input
            type="text"
            placeholder="Buscar..."
            value={search}
            onChange={(e) => { setSearch(e.target.value); setPage(1) }}
            className="w-full pl-9 pr-3 py-2 bg-zinc-800 border border-zinc-700 rounded-lg text-zinc-200 text-sm placeholder-zinc-500 focus:outline-none focus:border-cyan-500"
          />
        </div>
        <select
          value={categoryId}
          onChange={(e) => { setCategoryId(e.target.value); setPage(1) }}
          className="px-3 py-2 bg-zinc-800 border border-zinc-700 rounded-lg text-zinc-200 text-sm focus:outline-none focus:border-cyan-500"
        >
          <option value="">Todas las categorías</option>
          {categories.map((c) => (
            <option key={c.id} value={c.id}>{c.name}</option>
          ))}
        </select>
      </div>

      <Table
        columns={columns}
        data={products}
        onRowClick={(p) => navigate(`/dashboard/products/${p.id}/edit`)}
        emptyMessage={loading ? 'Cargando...' : 'No hay productos'}
      />

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex items-center justify-center gap-2 mt-6">
          <Button variant="secondary" size="sm" disabled={page === 1} onClick={() => setPage(page - 1)}>
            Anterior
          </Button>
          <span className="text-sm text-zinc-400 px-3">Página {page} de {totalPages}</span>
          <Button variant="secondary" size="sm" disabled={page === totalPages} onClick={() => setPage(page + 1)}>
            Siguiente
          </Button>
        </div>
      )}

      <BulkProductModal
        open={bulkOpen}
        onClose={() => setBulkOpen(false)}
        categories={categories}
        onCreated={refetch}
      />
    </div>
  )
}
