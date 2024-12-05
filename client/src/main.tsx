import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { createBrowserRouter } from 'react-router-dom'

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <App />,
      children: [
        {
          index: true,
          element: <Home />
        },
        {
          path: "shop",
          element: <Shop />
        },
        {
          path: "cart",
          element: <Cart />
        },
        {
          path: "/shop/orders",
          element: <UserProtectedRoute><Orders /></UserProtectedRoute>
        },
        {
          path: "/products/:id",
          element: <ProductDetails />
        },
        {
          path: "/search",
          element: <Search />
        },
        {
          path: "/news/:id",
          element: <NewsDetails />
        },
      ]
    },
    {
      path: "/dashboard/admin",
      element: <AdminLayout />,
      children: [
        {
          index: true,
          element: <AdminHome />
        }
      ]
    },
    {
      path: "/dashboard/seller",
      element: <SellerLayout />,
      children: [
        {
          index: true,
          element: <SellerHome />
        }
      ]
    },
    {
      path: '*',
      element: <NotFound />
    },
    {
      path: '/login',
      element: <Login />
    },
    {
      path: '/signup',
      element: <SignUp />
    },


  ]
)

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
