import { useState, useEffect } from 'react'
import { Save, Loader } from 'lucide-react'
import { Button, Input, Textarea } from '../../components/ui/Form'
import { Card } from '../../components/ui/Card'
import ImageUpload from '../../components/ImageUpload'
import ScheduleInput from '../../components/ScheduleInput'
import api from '../../../api/admin'

const DEFAULT_SETTINGS = {
  business_name: '',
  business_slogan: '',
  business_description: '',
  logo_url: '',
  favicon_url: '',
  primary_color: '#06b6d4',
  secondary_color: '#3b82f6',
  whatsapp_number: '',
  email: '',
  address: '',
  business_hours: [],
  instagram: '',
  facebook: '',
}

export default function Settings() {
  const [settings, setSettings] = useState(DEFAULT_SETTINGS)
  const [loading, setLoading] = useState(true)
  const [saving, setSaving] = useState(false)
  const [message, setMessage] = useState('')

  useEffect(() => {
    api.get('/admin/settings')
      .then(({ data }) => setSettings((prev) => ({ ...prev, ...data })))
      .catch(() => {})
      .finally(() => setLoading(false))
  }, [])

  const handleChange = (key, value) => {
    setSettings((prev) => ({ ...prev, [key]: value }))
  }

  const handleSave = async (e) => {
    e.preventDefault()
    setSaving(true)
    setMessage('')
    try {
      await api.put('/admin/settings', settings)
      setMessage('Configuración guardada')
    } catch (err) {
      setMessage('Error al guardar')
    } finally {
      setSaving(false)
    }
  }

  if (loading) {
    return (
      <div className="flex items-center justify-center py-20">
        <Loader className="w-6 h-6 animate-spin text-cyan-400" />
      </div>
    )
  }

  return (
    <div className="max-w-7xl mx-auto">
      <h1 className="text-2xl font-bold text-zinc-100 mb-6">Configuración del negocio</h1>

      <form onSubmit={handleSave}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card>
            <h2 className="text-lg font-semibold text-zinc-100 mb-4">Información general</h2>
            <div className="space-y-4">
              <Input
                label="Nombre del negocio"
                value={settings.business_name}
                onChange={(e) => handleChange('business_name', e.target.value)}
              />
              <Input
                label="Slogan"
                value={settings.business_slogan}
                onChange={(e) => handleChange('business_slogan', e.target.value)}
              />
              <Textarea
                label="Descripción"
                value={settings.business_description}
                onChange={(e) => handleChange('business_description', e.target.value)}
              />
              <div className="max-w-2xl">
                <div className="grid grid-cols-2 gap-4">
                  <ImageUpload
                    label="Logo"
                    images={settings.logo_url ? [settings.logo_url] : []}
                    onChange={(imgs) => handleChange('logo_url', imgs[0] || '')}
                    max={1}
                    folder="branding"
                  />
                  <ImageUpload
                    label="Favicon"
                    images={settings.favicon_url ? [settings.favicon_url] : []}
                    onChange={(imgs) => handleChange('favicon_url', imgs[0] || '')}
                    max={1}
                    folder="branding"
                  />
                </div>
              </div>
            </div>
          </Card>

          <Card>
            <h2 className="text-lg font-semibold text-zinc-100 mb-4">Contacto</h2>
            <div className="space-y-4">
              <Input
                label="WhatsApp"
                value={settings.whatsapp_number}
                onChange={(e) => handleChange('whatsapp_number', e.target.value)}
                type="tel"
                autoComplete="tel"
                placeholder="5493834971799"
              />
              <Input
                label="Email para contacto"
                value={settings.email}
                onChange={(e) => handleChange('email', e.target.value)}
                type="email"
              />
              <Input
                label="Dirección"
                value={settings.address}
                onChange={(e) => handleChange('address', e.target.value)}
              />
              <ScheduleInput
                value={settings.business_hours}
                onChange={(val) => handleChange('business_hours', val)}
              />
            </div>
          </Card>

          <Card>
            <h2 className="text-lg font-semibold text-zinc-100 mb-4">Marca</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-zinc-400 mb-1.5">Color principal</label>
                <div className="flex items-center gap-3">
                  <input
                    type="color"
                    value={settings.primary_color}
                    onChange={(e) => handleChange('primary_color', e.target.value)}
                    className="w-10 h-10 rounded-lg border border-zinc-700 cursor-pointer bg-transparent"
                  />
                  <Input
                    value={settings.primary_color}
                    onChange={(e) => handleChange('primary_color', e.target.value)}
                    className="flex-1"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-zinc-400 mb-1.5">Color secundario</label>
                <div className="flex items-center gap-3">
                  <input
                    type="color"
                    value={settings.secondary_color}
                    onChange={(e) => handleChange('secondary_color', e.target.value)}
                    className="w-10 h-10 rounded-lg border border-zinc-700 cursor-pointer bg-transparent"
                  />
                  <Input
                    value={settings.secondary_color}
                    onChange={(e) => handleChange('secondary_color', e.target.value)}
                    className="flex-1"
                  />
                </div>
              </div>
            </div>
          </Card>

          <Card>
            <h2 className="text-lg font-semibold text-zinc-100 mb-4">Redes sociales</h2>
            <div className="space-y-4">
              <Input
                label="Instagram"
                value={settings.instagram}
                onChange={(e) => handleChange('instagram', e.target.value)}
                placeholder="https://instagram.com/..."
              />
              <Input
                label="Facebook"
                value={settings.facebook}
                onChange={(e) => handleChange('facebook', e.target.value)}
                placeholder="https://facebook.com/..."
              />
            </div>
          </Card>
        </div>

        <div className="flex items-center gap-4 mt-6">
          <Button type="submit" disabled={saving}>
            <Save className="w-4 h-4" />
            {saving ? 'Guardando...' : 'Guardar configuración'}
          </Button>
          {message && (
            <span className={`text-sm ${message.includes('Error') ? 'text-red-400' : 'text-emerald-400'}`}>
              {message}
            </span>
          )}
        </div>
      </form>
    </div>
  )
}
