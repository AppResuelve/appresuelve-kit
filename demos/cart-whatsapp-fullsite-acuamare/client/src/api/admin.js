import axios from 'axios'

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL || '/api',
})

api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token')
  console.log('[admin api] REQ:', config.method?.toUpperCase(), config.url, token ? '✓ token' : '✗ sin token')
  if (token) config.headers.Authorization = `Bearer ${token}`
  return config
})

api.interceptors.response.use(
  (response) => {
    console.log('[admin api] RES:', response.status, response.config.url)
    return response
  },
  (error) => {
    console.error('[admin api] ERR:', error.response?.status, error.config?.url, error.message)
    if (error.response?.status === 401) {
      localStorage.removeItem('token')
      localStorage.removeItem('user')
      if (window.location.pathname !== '/login') {
        window.location.href = '/login'
      }
    }
    return Promise.reject(error)
  }
)

export default api
