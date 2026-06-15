import { createContext, useContext, useReducer, useEffect, useState, useRef } from 'react'
import { siteData } from '../../data/siteData'
import { useStore } from './StoreContext'

const CartContext = createContext()

const STORAGE_KEY = siteData.cart.persistenceKey || 'appresuelve-cart'

function cartReducer(state, action) {
  switch (action.type) {
    case 'ADD_ITEM': {
      const quantityToAdd = action.payload.quantity || 1
      const existingIndex = state.items.findIndex(
        (item) => item.productId === action.payload.productId
      )

      if (existingIndex >= 0) {
        const newItems = [...state.items]
        newItems[existingIndex] = {
          ...newItems[existingIndex],
          quantity: newItems[existingIndex].quantity + quantityToAdd,
        }
        return { ...state, items: newItems }
      }

      return {
        ...state,
        items: [
          ...state.items,
          { productId: action.payload.productId, quantity: quantityToAdd },
        ],
      }
    }

    case 'REMOVE_ITEM':
      return {
        ...state,
        items: state.items.filter(
          (item) => item.productId !== action.payload.productId
        ),
      }

    case 'UPDATE_QUANTITY': {
      if (action.payload.quantity <= 0) {
        return {
          ...state,
          items: state.items.filter(
            (item) => item.productId !== action.payload.productId
          ),
        }
      }

      return {
        ...state,
        items: state.items.map((item) =>
          item.productId === action.payload.productId
            ? { ...item, quantity: action.payload.quantity }
            : item
        ),
      }
    }

    case 'CLEAR_CART':
      return { ...state, items: [] }

    case 'LOAD_CART':
      return { ...state, items: action.payload }

    default:
      return state
  }
}

export function CartProvider({ children }) {
  const { productsMap } = useStore()
  const [state, dispatch] = useReducer(cartReducer, {
    items: [],
  })
  const [loaded, setLoaded] = useState(false)
  const hasProducts = useRef(false)

  // Cargar del localStorage cuando productsMap cambia
  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY)
    if (!stored) {
      setLoaded(true)
      return
    }

    try {
      const parsed = JSON.parse(stored)
      // Solo filtrar si productsMap ya tiene datos
      if (Object.keys(productsMap).length > 0) {
        hasProducts.current = true
        const valid = parsed.filter((item) => productsMap[item.productId])
        dispatch({ type: 'LOAD_CART', payload: valid })
      } else if (parsed.length > 0) {
        // productsMap vacío (aún no cargó) → mantener items sin filtrar
        dispatch({ type: 'LOAD_CART', payload: parsed })
      }
    } catch {
      // ignore
    } finally {
      setLoaded(true)
    }
  }, [productsMap])

  // Guardar en localStorage solo después de la carga inicial
  useEffect(() => {
    if (loaded) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state.items))
    }
  }, [state.items, loaded])

  const addItem = (productId, quantity = 1) => {
    dispatch({ type: 'ADD_ITEM', payload: { productId, quantity } })
  }

  const removeItem = (productId) => {
    dispatch({ type: 'REMOVE_ITEM', payload: { productId } })
  }

  const updateQuantity = (productId, quantity) => {
    dispatch({ type: 'UPDATE_QUANTITY', payload: { productId, quantity } })
  }

  const clearCart = () => {
    dispatch({ type: 'CLEAR_CART' })
  }

  const getItemQuantity = (productId) => {
    const item = state.items.find((item) => item.productId === productId)
    return item ? item.quantity : 0
  }

  const cartItems = state.items
    .map((item) => {
      const product = productsMap[item.productId]
      if (!product) {
        // placeholder mientras carga productsMap
        return {
          id: item.productId,
          productId: item.productId,
          name: 'Cargando...',
          images: [],
          retailPrice: 0,
          wholesalePrice: null,
          wholesaleMinQty: null,
          quantity: item.quantity,
          unitPrice: 0,
          subtotal: 0,
        }
      }

      const hasWholesale = product.wholesalePrice && product.wholesaleMinQty
      const usesWholesale = hasWholesale && item.quantity >= product.wholesaleMinQty
      const unitPrice = usesWholesale ? product.wholesalePrice : product.retailPrice

      return {
        ...product,
        quantity: item.quantity,
        unitPrice: Number(unitPrice),
        subtotal: Number(unitPrice) * item.quantity,
      }
    })
    .filter(Boolean)

  const totalItems = state.items.reduce((sum, item) => sum + item.quantity, 0)

  const totalPrice = cartItems.reduce((sum, item) => sum + item.subtotal, 0)

  const value = {
    items: cartItems,
    totalItems,
    totalPrice,
    addItem,
    removeItem,
    updateQuantity,
    clearCart,
    getItemQuantity,
  }

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

export function useCart() {
  const context = useContext(CartContext)
  if (!context) {
    throw new Error('useCart debe usarse dentro de CartProvider')
  }
  return context
}
