import { useState } from 'react'
import { Send, CheckCircle, AlertCircle, Loader } from 'lucide-react'
import { sendContactForm } from '../services/contactService'
import { siteData } from '../data/siteData'

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    website: '',
  })
  const [status, setStatus] = useState('idle')
  const [errorMessage, setErrorMessage] = useState('')

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const validateForm = () => {
    if (!formData.name.trim()) return 'Por favor ingresá tu nombre'
    if (!formData.email.trim()) return 'El email es requerido'
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email))
      return 'El email no es válido'
    if (!formData.message.trim()) return 'Por favor escribí tu mensaje'
    return null
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    const validationError = validateForm()
    if (validationError) {
      setStatus('error')
      setErrorMessage(validationError)
      return
    }

    setStatus('loading')
    setErrorMessage('')

    try {
      await sendContactForm({
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        message: formData.message,
        website: formData.website,
        receiveEmailsAt: siteData.contact.receiveEmailsAt,
        businessName: siteData.business.name,
      })
      setStatus('success')
      setFormData({ name: '', email: '', phone: '', message: '', website: '' })
    } catch (error) {
      setStatus('error')
      setErrorMessage(
        error.message || 'Ocurrió un error. Por favor intentá de nuevo.'
      )
    }
  }

  if (status === 'success') {
    return (
      <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-card)] p-12 text-center">
        <div className="w-20 h-20 rounded-full bg-emerald-500/20 flex items-center justify-center mx-auto mb-6">
          <CheckCircle className="w-10 h-10 text-emerald-500" />
        </div>
        <h3 className="text-2xl font-bold text-[var(--color-text-primary)] mb-3">
          ¡Mensaje enviado!
        </h3>
        <p className="text-[var(--color-text-secondary)] mb-8">
          Gracias por contactarnos. Te responderemos a la brevedad.
        </p>
        <button
          onClick={() => setStatus('idle')}
          className="text-cyan-400 font-medium hover:underline"
        >
          Enviar otro mensaje
        </button>
      </div>
    )
  }

  return (
    <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-card)] p-8 sm:p-12">
      <h3 className="text-2xl font-bold text-[var(--color-text-primary)] mb-8">
        Enviános tu mensaje
      </h3>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div
          style={{ position: 'absolute', left: '-9999px' }}
          aria-hidden="true"
        >
          <input
            type="text"
            name="website"
            value={formData.website}
            onChange={handleChange}
            autoComplete="off"
            tabIndex={-1}
          />
        </div>

        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-[var(--color-text-secondary)] mb-2"
          >
            Nombre completo
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-5 py-4 rounded-xl border border-[var(--color-border)] bg-[var(--color-background)] text-[var(--color-text-primary)] placeholder-[var(--color-text-muted)] focus:outline-none focus:border-cyan-500 transition-colors"
            placeholder="Juan Pérez"
          />
        </div>

        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-[var(--color-text-secondary)] mb-2"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-5 py-4 rounded-xl border border-[var(--color-border)] bg-[var(--color-background)] text-[var(--color-text-primary)] placeholder-[var(--color-text-muted)] focus:outline-none focus:border-cyan-500 transition-colors"
            placeholder="juan@email.com"
          />
        </div>

        <div>
          <label
            htmlFor="phone"
            className="block text-sm font-medium text-[var(--color-text-secondary)] mb-2"
          >
            Teléfono (opcional)
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-5 py-4 rounded-xl border border-[var(--color-border)] bg-[var(--color-background)] text-[var(--color-text-primary)] placeholder-[var(--color-text-muted)] focus:outline-none focus:border-cyan-500 transition-colors"
            placeholder="+54 9 XXX XXX XXXX"
          />
        </div>

        <div>
          <label
            htmlFor="message"
            className="block text-sm font-medium text-[var(--color-text-secondary)] mb-2"
          >
            Mensaje
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={5}
            className="w-full px-5 py-4 rounded-xl border border-[var(--color-border)] bg-[var(--color-background)] text-[var(--color-text-primary)] placeholder-[var(--color-text-muted)] focus:outline-none focus:border-cyan-500 transition-colors resize-none"
            placeholder="Contanos en qué podemos ayudarte..."
          />
        </div>

        {status === 'error' && (
          <div className="flex items-center gap-3 p-4 rounded-xl bg-red-500/10 border border-red-500/20 text-red-500">
            <AlertCircle className="w-5 h-5 shrink-0" />
            <p className="text-sm">{errorMessage}</p>
          </div>
        )}

        <button
          type="submit"
          disabled={status === 'loading'}
          className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl bg-gradient-to-r from-cyan-400 to-blue-600 text-[var(--color-text-primary)] font-semibold outline-4 outline-cyan-300/60 shadow-[inset_0_1px_1px_rgba(255,255,255,0.25),0_10px_25px_rgba(6,182,212,0.35)] hover:-translate-y-0.5 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {status === 'loading' ? (
            <>
              <Loader className="w-5 h-5 animate-spin" />
              Enviando...
            </>
          ) : (
            <>
              <Send className="w-4 h-4" />
              Enviar mensaje
            </>
          )}
        </button>
      </form>
    </div>
  )
}
