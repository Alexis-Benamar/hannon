import { createContext, ReactNode, useCallback, useMemo, useState } from 'react'

import { googleLogout, useGoogleLogin } from '@react-oauth/google'
import Cookies from 'js-cookie'

import { AuthResponse } from 'types/auth'

type AuthContextType = {
  credentials: AuthResponse | null
  login: () => void
  logout: () => void
  getCredentials: () => string | undefined
}

const AuthContext = createContext({} as AuthContextType)

const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [credentials, setCredentials] = useState<AuthResponse | null>(null)

  const login = useGoogleLogin({
    scope: ['openid', 'https://www.googleapis.com/auth/youtube'].join(' '),
    onSuccess: (response) => {
      Cookies.set('hannon-auth', response.access_token, {
        sameSite: 'strict',
        secure: true,
        expires: new Date(new Date().getTime() + response.expires_in * 1000),
      })
      setCredentials(response)
    },
    onError: (error) => console.error('Error when logging in :', error),
  })

  const logout = useCallback(() => {
    googleLogout()
    Cookies.remove('hannon-auth')
    setCredentials(null)
  }, [])

  const getCredentials = useCallback(() => {
    const accessToken = Cookies.get('hannon-auth')
    return accessToken
  }, [])

  const value = useMemo(
    () => ({
      credentials,
      login,
      logout,
      getCredentials,
    }),
    [credentials, login, logout, getCredentials],
  )
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export { AuthContext, AuthProvider }
