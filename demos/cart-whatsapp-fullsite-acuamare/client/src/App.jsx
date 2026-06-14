import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { AuthProvider } from './admin/context/AuthContext'
import { AlertProvider } from './admin/components/ui/AlertContext'
import ProtectedRoute from './admin/components/ProtectedRoute'
import StoreApp from './store/StoreApp'
import Layout from './admin/components/Layout'
import Login from './admin/pages/Login'
import DashboardHome from './admin/pages/dashboard/DashboardHome'
import Products from './admin/pages/dashboard/Products'
import ProductForm from './admin/pages/dashboard/ProductForm'
import Categories from './admin/pages/dashboard/Categories'
import Settings from './admin/pages/dashboard/Settings'
import Media from './admin/pages/dashboard/Media'
import ChangeRequests from './admin/pages/dashboard/ChangeRequests'
import StorePage from './admin/pages/store/Store'
import Activate from './admin/pages/Activate'

function AdminApp() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <AlertProvider>
          <Routes>
          <Route path="/login" element={<Login />} />
            <Route path="/activate" element={<Activate />} />
            <Route element={<ProtectedRoute><Layout /></ProtectedRoute>}>
            <Route path="/dashboard" element={<DashboardHome />} />
            <Route path="/dashboard/products" element={<Products />} />
            <Route path="/dashboard/products/new" element={<ProductForm />} />
            <Route path="/dashboard/products/:id/edit" element={<ProductForm />} />
            <Route path="/dashboard/categories" element={<Categories />} />
            <Route path="/dashboard/settings" element={<Settings />} />
            <Route path="/dashboard/media" element={<Media />} />
            <Route path="/dashboard/change-requests" element={<ChangeRequests />} />
            <Route path="/store" element={<StorePage />} />
          </Route>
          <Route path="/" element={<Navigate to="/dashboard" replace />} />
          <Route path="*" element={<Navigate to="/dashboard" replace />} />
          </Routes>
        </AlertProvider>
      </AuthProvider>
    </BrowserRouter>
  )
}

export default function App() {
  const hostname = window.location.hostname
  const isAdmin = hostname.startsWith('admin.')

  if (isAdmin) {
    return <AdminApp />
  }

  return <StoreApp />
}
