import { createContext, ReactNode, useCallback, useMemo, useState } from 'react'

import { googleLogout, useGoogleLogin } from '@react-oauth/google'
import { AuthResponse } from 'types/auth'

type AuthContextType = {
  credentials: AuthResponse | null
  login: () => void
  logout: () => void
}

const AuthContext = createContext({} as AuthContextType)

const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [credentials, setCredentials] = useState<AuthResponse | null>(null)

  const login = useGoogleLogin({
    scope: ['openid', 'https://www.googleapis.com/auth/youtube'].join(' '),
    onSuccess: (response) => setCredentials(response),
    onError: (error) => console.error('Error when logging in :', error),
  })

  const logout = useCallback(() => {
    googleLogout()
    setCredentials(null)
  }, [])

  const value = useMemo(
    () => ({
      credentials,
      login,
      logout,
    }),
    [credentials, login, logout],
  )
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export { AuthContext, AuthProvider }
