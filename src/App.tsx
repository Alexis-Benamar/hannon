import { AuthProvider } from 'context/Auth'
import { QueryClient, QueryClientProvider } from 'react-query'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import ProtectedRoute from 'components/ProtectedRoute'
import Home from 'pages/Home'
import Login from 'pages/Login'
import NotFound from 'pages/NotFound'
import Playlist from 'pages/Playlist'
import Root from 'pages/Root'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      suspense: true,
      staleTime: 60000,
    },
  },
})

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <NotFound />,
    children: [
      {
        element: <ProtectedRoute />,
        children: [
          { index: true, element: <Home /> },
          { path: '/playlist/:id', element: <Playlist /> },
        ],
      },
      { path: '/login', element: <Login /> },
    ],
  },
])

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </QueryClientProvider>
  )
}

export default App
