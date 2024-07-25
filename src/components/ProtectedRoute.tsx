import { useContext } from 'react'

import { Navigate, Outlet } from 'react-router-dom'

import { AuthContext } from 'context/Auth'

const ProtectedRoute = () => {
  const { getCredentials } = useContext(AuthContext)
  const accessToken = getCredentials()

  if (!accessToken) {
    return <Navigate to="/login" />
  }

  return <Outlet />
}

export default ProtectedRoute
