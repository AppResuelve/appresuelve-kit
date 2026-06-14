import { NavLink, Link } from 'react-router-dom'
import {
  LayoutDashboard,
  Package,
  Tags,
  Settings,
  Image,
  Store,
  LogOut,
  X,
  Wrench,
} from 'lucide-react'
import { useAuth } from '../context/AuthContext'

const ADMIN_ITEMS = [
  { to: '/dashboard', icon: LayoutDashboard, label: 'Dashboard' },
  { to: '/dashboard/products', icon: Package, label: 'Productos' },
  { to: '/dashboard/categories', icon: Tags, label: 'Categorías' },
  { to: '/dashboard/media', icon: Image, label: 'Galería' },
  { to: '/dashboard/change-requests', icon: Wrench, label: 'Solicitar cambio' },
  { to: '/dashboard/settings', icon: Settings, label: 'Configuración' },
]

const STORE_ITEM = { to: '/store', icon: Store, label: 'Tienda' }

export default function Sidebar({ open, onClose }) {
  const { user, logout } = useAuth()

  const sidebarContent = (
    <>
      {/* Header */}
      <div className="flex items-center justify-between px-5 h-16 border-b border-zinc-800 shrink-0">
        <Link to="/dashboard" onClick={onClose} className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-400 to-blue-600 flex items-center justify-center text-white font-bold text-sm">
            A
          </div>
          <span className="font-semibold text-zinc-100 text-sm">Panel</span>
        </Link>
        <button
          onClick={onClose}
          className="lg:hidden p-1.5 rounded-lg text-zinc-400 hover:text-zinc-200 hover:bg-zinc-800 transition-colors"
        >
          <X className="w-4 h-4" />
        </button>
      </div>

      {/* Nav */}
      <nav className="flex-1 py-4 px-3 space-y-0.5 overflow-y-auto">
        <p className="px-3 text-[10px] font-semibold text-zinc-600 uppercase tracking-wider mb-2">
          Administración
        </p>
        {ADMIN_ITEMS.map(({ to, icon: Icon, label }) => (
          <NavLink
            key={to}
            to={to}
            end={to === '/dashboard'}
            onClick={onClose}
            className={({ isActive }) =>
              `flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                isActive
                  ? 'bg-cyan-500/10 text-cyan-400'
                  : 'text-zinc-400 hover:text-zinc-200 hover:bg-zinc-800'
              }`
            }
          >
            <Icon className="w-4 h-4" />
            {label}
          </NavLink>
        ))}

        <div className="my-3 border-t border-zinc-800/50" />

        <p className="px-3 text-[10px] font-semibold text-zinc-600 uppercase tracking-wider mb-2">
          Sitio público
        </p>
        <NavLink
          to={STORE_ITEM.to}
          onClick={onClose}
          className={({ isActive }) =>
            `flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
              isActive
                ? 'bg-cyan-500/10 text-cyan-400'
                : 'text-zinc-400 hover:text-zinc-200 hover:bg-zinc-800'
            }`
          }
        >
          <Store className="w-4 h-4" />
          {STORE_ITEM.label}
        </NavLink>
      </nav>

      {/* User + Logout */}
      <div className="border-t border-zinc-800 p-4 shrink-0">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-zinc-700 flex items-center justify-center text-xs font-medium text-zinc-300">
            {user?.name?.[0]?.toUpperCase() || 'A'}
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium text-zinc-200 truncate">{user?.name}</p>
            <p className="text-xs text-zinc-500 truncate">{user?.email}</p>
          </div>
          <button
            onClick={logout}
            className="p-1.5 rounded-lg text-zinc-500 hover:text-red-400 hover:bg-red-500/10 transition-colors"
            title="Cerrar sesión"
          >
            <LogOut className="w-4 h-4" />
          </button>
        </div>
      </div>
    </>
  )

  return (
    <>
      {/* Overlay mobile */}
      {open && (
        <div
          className="lg:hidden fixed inset-0 bg-black/50 z-40"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`
          fixed left-0 top-0 h-full w-60 bg-zinc-900 border-r border-zinc-800 flex flex-col z-50
          transition-transform duration-300
          lg:translate-x-0
          ${open ? 'translate-x-0' : '-translate-x-full'}
        `}
      >
        {sidebarContent}
      </aside>
    </>
  )
}
