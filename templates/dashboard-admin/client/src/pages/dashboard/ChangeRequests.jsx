import { useState } from 'react'
import { Wrench, Send, Clock, CheckCircle, XCircle, Loader, AlertTriangle, Edit, ArrowLeft } from 'lucide-react'
import { Button } from '../../components/ui/Form'
import { Card } from '../../components/ui/Card'
import { Modal } from '../../components/ui/Modal'
import { useAlert } from '../../components/ui/AlertContext'
import { useChangeRequests, useChangeRequestsRemaining } from '../../hooks/useChangeRequests'
import api from '../../api/client'

const MODULES = [
  {
    type: 'hero',
    label: 'Hero',
    icon: '🎯',
    description: 'Cambiá el título, subtítulo, botón e imagen de fondo de la portada.',
    fields: [
      { key: 'headline', label: 'Título principal', type: 'text', placeholder: 'Las mejores piletas del país' },
      { key: 'subheadline', label: 'Subtítulo', type: 'text', placeholder: 'Fabricación propia, envíos a todo el país' },
      { key: 'ctaText', label: 'Texto del botón', type: 'text', placeholder: 'Ver productos' },
      { key: 'backgroundImage', label: 'URL de imagen de fondo', type: 'text', placeholder: 'https://res.cloudinary.com/...' },
    ],
  },
  {
    type: 'hero_carousel',
    label: 'Hero Carrusel',
    icon: '🎠',
    description: 'Agregá un carrusel de imágenes con texto en la portada.',
    fields: [],
  },
  {
    type: 'top_banner',
    label: 'Banner Superior',
    icon: '📢',
    description: 'Un banner con texto y link en la parte superior del sitio.',
    fields: [],
  },
  {
    type: 'top_banner_countdown',
    label: 'Banner con Cuenta Atrás',
    icon: '⏰',
    description: 'Banner con cuenta regresiva para ofertas por tiempo limitado.',
    fields: [],
  },
]

const STATUS_MAP = {
  pending: { label: 'Pendiente', icon: Clock, dot: 'bg-amber-500', text: 'text-amber-400' },
  in_progress: { label: 'En progreso', icon: Loader, dot: 'bg-cyan-500', text: 'text-cyan-400' },
  done: { label: 'Hecho', icon: CheckCircle, dot: 'bg-emerald-500', text: 'text-emerald-400' },
  cancelled: { label: 'Cancelado', icon: XCircle, dot: 'bg-zinc-500', text: 'text-zinc-400' },
}

export default function ChangeRequests() {
  const Alert = useAlert()
  const { requests, totalPages, page, loading, refetch } = useChangeRequests()
  const { limit, used, remaining, canRequest } = useChangeRequestsRemaining()
  const [selectedModule, setSelectedModule] = useState(null)
  const [editingRequest, setEditingRequest] = useState(null)
  const [formData, setFormData] = useState({})
  const [submitting, setSubmitting] = useState(false)
  const [showHistory, setShowHistory] = useState(false)

  const handleOpenModule = (mod) => {
    setEditingRequest(null)
    setSelectedModule(mod)
    setFormData({})
  }

  const handleEditRequest = (req) => {
    const mod = MODULES.find((m) => m.type === req.type)
    if (!mod) return
    setSelectedModule(mod)
    setEditingRequest(req)
    setFormData(req.data || {})
  }

  const handleSubmit = async () => {
    if (!selectedModule) return

    const hasFields = selectedModule.fields.length > 0
    if (hasFields) {
      const empty = selectedModule.fields.some((f) => !formData[f.key]?.trim())
      if (empty) {
        Alert.fire({ message: 'Completá todos los campos', type: 'warning' })
        return
      }
    }

    setSubmitting(true)
    try {
      let response
      if (editingRequest) {
        response = await api.put(`/admin/change-requests/${editingRequest.id}`, { data: formData })
      } else {
        response = await api.post('/admin/change-requests', { type: selectedModule.type, data: formData })
      }

      const { whatsappLink } = response.data

      Alert.fire({ message: editingRequest ? 'Solicitud actualizada' : 'Solicitud enviada. Te contactaremos pronto.', type: 'success' })
      setSelectedModule(null)
      setEditingRequest(null)
      refetch(1)

      if (whatsappLink) {
        window.open(whatsappLink, '_blank')
      }
    } catch (err) {
      let msg = 'Error al enviar solicitud'
      try {
        const body = typeof err.response?.data === 'string'
          ? JSON.parse(err.response.data)
          : err.response?.data
        msg = body?.error || body?.message || msg
      } catch {}
      Alert.fire({ message: msg, type: 'error' })
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <div className="max-w-7xl mx-auto">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-bold text-zinc-100">Solicitar cambio</h1>
          <p className="text-sm text-zinc-500">
            {canRequest
              ? `Te quedan ${remaining} de ${limit} cambios este mes`
              : `Ya usaste tus ${limit} cambios de este mes`}
          </p>
        </div>
        <Button variant="secondary" onClick={() => { setShowHistory(!showHistory); if (!showHistory) refetch(1) }}>
          {showHistory ? (
            <>
              <ArrowLeft className="w-4 h-4" />
              Volver
            </>
          ) : (
            <>
              <Clock className="w-4 h-4" />
              Historial
            </>
          )}
        </Button>
      </div>

      {!canRequest && requests.length === 0 && (
        <Card>
          <div className="text-center py-12">
            <AlertTriangle className="w-10 h-10 text-amber-400 mx-auto mb-3" />
            <p className="text-zinc-300 font-medium mb-1">Límite alcanzado</p>
            <p className="text-sm text-zinc-500">Ya usaste tus {limit} cambios de este mes. Volvé el mes que viene.</p>
          </div>
        </Card>
      )}

      {/* Module grid */}
      {!showHistory && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
          {MODULES.map((mod) => (
            <button
              key={mod.type}
              onClick={() => canRequest && mod.fields.length > 0 && handleOpenModule(mod)}
              disabled={!canRequest || mod.fields.length === 0}
              className={`text-left p-5 rounded-xl border transition-colors
                ${canRequest && mod.fields.length > 0
                  ? 'bg-zinc-900 border-zinc-800 hover:border-cyan-500 cursor-pointer'
                  : 'bg-zinc-900/50 border-zinc-800/50 opacity-50 cursor-not-allowed'
                }`}
            >
              <div className="flex items-start gap-3">
                <span className="text-2xl">{mod.icon}</span>
                <div>
                  <p className="font-medium text-zinc-200">{mod.label}</p>
                  <p className="text-sm text-zinc-500 mt-0.5">{mod.description}</p>
                  {mod.fields.length === 0 && (
                    <p className="text-xs text-zinc-600 mt-1">Próximamente</p>
                  )}
                </div>
              </div>
            </button>
          ))}
        </div>
      )}

      {/* History table */}
      {showHistory && (
        <>
          {loading ? (
            <div className="flex items-center justify-center py-20">
              <Loader className="w-6 h-6 animate-spin text-cyan-400" />
            </div>
          ) : requests.length === 0 ? (
            <Card>
              <div className="text-center py-12">
                <Clock className="w-10 h-10 text-zinc-600 mx-auto mb-3" />
                <p className="text-zinc-500">No hay solicitudes</p>
              </div>
            </Card>
          ) : (
            <Card>
              <div className="divide-y divide-zinc-800">
                {requests.map((req) => {
                  const status = STATUS_MAP[req.status] || STATUS_MAP.pending
                  const mod = MODULES.find((m) => m.type === req.type)
                  const StatusIcon = status.icon
                  const isPending = req.status === 'pending'
                  return (
                    <div key={req.id} className="flex items-center gap-4 px-4 py-3 group">
                      <span className="text-xl shrink-0">{mod?.icon || '🛠'}</span>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-zinc-200">{mod?.label || req.type}</p>
                        <p className="text-xs text-zinc-500 truncate">
                          {Object.values(req.data || {}).slice(0, 2).join(' — ') || 'Sin datos'}
                        </p>
                      </div>
                      <div className="flex items-center gap-1.5 shrink-0">
                        <StatusIcon className={`w-4 h-4 ${status.text}`} />
                        <span className={`text-xs font-medium ${status.text}`}>{status.label}</span>
                      </div>
                      <span className="text-xs text-zinc-600 shrink-0">
                        {new Date(req.createdAt).toLocaleDateString()}
                      </span>
                      {isPending && (
                        <button
                          onClick={() => handleEditRequest(req)}
                          className="p-1.5 rounded-lg text-zinc-500 hover:text-cyan-400 hover:bg-zinc-700 transition-colors opacity-0 group-hover:opacity-100"
                          title="Editar"
                        >
                          <Edit className="w-4 h-4" />
                        </button>
                      )}
                    </div>
                  )
                })}
              </div>
            </Card>
          )}

          {/* History pagination */}
          {totalPages > 1 && (
            <div className="flex items-center justify-center gap-2 mt-4">
              <Button variant="secondary" size="sm" disabled={page === 1} onClick={() => refetch(page - 1)}>
                Anterior
              </Button>
              <span className="text-sm text-zinc-400 px-3">Página {page} de {totalPages}</span>
              <Button variant="secondary" size="sm" disabled={page === totalPages} onClick={() => refetch(page + 1)}>
                Siguiente
              </Button>
            </div>
          )}
        </>
      )}

      {/* Form modal */}
      <Modal open={!!selectedModule} onClose={() => { setSelectedModule(null); setEditingRequest(null) }} title={editingRequest ? `Editar: ${selectedModule?.label}` : `Solicitar cambio: ${selectedModule?.label || ''}`}>
        {selectedModule && (
          <div className="space-y-4">
            {selectedModule.fields.map((field) => (
              <div key={field.key}>
                <label className="block text-sm font-medium text-zinc-400 mb-1.5">{field.label}</label>
                <input
                  type={field.type}
                  value={formData[field.key] || ''}
                  onChange={(e) => setFormData((prev) => ({ ...prev, [field.key]: e.target.value }))}
                  placeholder={field.placeholder}
                  className="w-full px-3 py-2 bg-zinc-800 border border-zinc-700 rounded-lg text-zinc-200 placeholder-zinc-500 focus:outline-none focus:border-cyan-500 text-sm"
                />
              </div>
            ))}

            <p className="text-xs text-zinc-600">
              Para imágenes, subilas a la Galería y pegá la URL acá.
            </p>

            <div className="flex gap-3 justify-end pt-2">
              <Button type="button" variant="secondary" onClick={() => { setSelectedModule(null); setEditingRequest(null) }}>Cancelar</Button>
              <Button type="button" onClick={handleSubmit} disabled={submitting}>
                <Send className="w-4 h-4" />
                {submitting ? 'Enviando...' : editingRequest ? 'Actualizar' : 'Enviar solicitud'}
              </Button>
            </div>
          </div>
        )}
      </Modal>
    </div>
  )
}
