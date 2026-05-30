// ============================================
// SERVICIO DE CONTACTO
// Envía datos del formulario al backend
// ============================================

/**
 * Envía el formulario de contacto al API de Brevo
 * @param {Object} data - Datos del formulario
 * @param {string} data.name - Nombre del visitante
 * @param {string} data.email - Email del visitante
 * @param {string} data.phone - Teléfono del visitante
 * @param {string} data.message - Mensaje del visitante
 * @returns {Promise<{success: boolean, message: string}>}
 */
export async function sendContactForm(data) {
  try {
    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })

    if (!response.ok) {
      const error = await response.json()
      throw new Error(error.message || 'Error al enviar el mensaje')
    }

    return await response.json()
  } catch (error) {
    throw error
  }
}