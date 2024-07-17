import { useContext, useEffect } from 'react'

import { AuthContext } from 'context/Auth'
import { useNavigate } from 'react-router-dom'

const Login = () => {
  const { credentials, login } = useContext(AuthContext)
  const navigate = useNavigate()

  useEffect(() => {
    if (credentials) {
      navigate('/')
    }
  }, [credentials, navigate])

  return (
    <>
      <p>
        This tool lets you <em>browse your playlists all at once</em>, without relying on youtube's janky interface.
      </p>
      <p>You need to sign in with Google, but it doesn't store any data, and only uses it to browse playlists 😊</p>
      <button onClick={() => login()}>Sign in with google 🚀</button>
    </>
  )
}

export default Login
