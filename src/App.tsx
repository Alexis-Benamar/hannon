import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { AuthProvider } from 'context/Auth'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import ProtectedRoute from 'components/ProtectedRoute'
import About from 'pages/About'
import Home from 'pages/Home'
import Login from 'pages/Login'
import NotFound from 'pages/NotFound'
import Playlist from 'pages/Playlist'
import Root from 'pages/Root'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
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
      { path: '/about', element: <About /> },
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
      <ReactQueryDevtools />
    </QueryClientProvider>
  )
}

export default App
