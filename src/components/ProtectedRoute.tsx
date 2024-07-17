import { useContext } from 'react'

import { AuthContext } from 'context/Auth'
import { Navigate, Outlet } from 'react-router-dom'

const ProtectedRoute = () => {
  const { credentials } = useContext(AuthContext)

  if (!credentials) {
    return <Navigate to="/login" />
  }

  return <Outlet />
}

export default ProtectedRoute
