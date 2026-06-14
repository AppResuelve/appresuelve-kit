import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { AuthProvider } from './context/AuthContext'
import ProtectedRoute from './components/ProtectedRoute'
import Layout from './components/Layout'
import Login from './pages/Login'
import DashboardHome from './pages/dashboard/DashboardHome'
import Products from './pages/dashboard/Products'
import ProductForm from './pages/dashboard/ProductForm'
import Categories from './pages/dashboard/Categories'
// import Orders from './pages/dashboard/Orders'
import Settings from './pages/dashboard/Settings'
import Media from './pages/dashboard/Media'
import ChangeRequests from './pages/dashboard/ChangeRequests'
import Store from './pages/store/Store'

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path="/login" element={<Login />} />

          <Route
            element={
              <ProtectedRoute>
                <Layout />
              </ProtectedRoute>
            }
          >
            <Route path="/dashboard" element={<DashboardHome />} />
            <Route path="/dashboard/products" element={<Products />} />
            <Route path="/dashboard/products/new" element={<ProductForm />} />
            <Route path="/dashboard/products/:id/edit" element={<ProductForm />} />
            <Route path="/dashboard/categories" element={<Categories />} />
            {/* <Route path="/dashboard/orders" element={<Orders />} /> */}
            <Route path="/dashboard/settings" element={<Settings />} />
            <Route path="/dashboard/media" element={<Media />} />
            <Route path="/dashboard/change-requests" element={<ChangeRequests />} />

            {/* Store — pública, sin auth, ruta reservada */}
            <Route path="/store" element={<Store />} />
          </Route>

          <Route path="/" element={<Navigate to="/dashboard" replace />} />
          <Route path="*" element={<Navigate to="/dashboard" replace />} />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  )
}

export default App
