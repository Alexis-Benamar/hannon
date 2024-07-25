import { useContext } from 'react'

import { Navigate } from 'react-router-dom'

import { AuthContext } from 'context/Auth'

const Login = () => {
  const { getCredentials, login } = useContext(AuthContext)
  const accessToken = getCredentials()

  if (accessToken) {
    return <Navigate to="/" />
  }

  return (
    <div>
      <p>
        This tool lets you <em>browse your playlists all at once</em>, without relying on youtube's janky interface.
      </p>
      <p>You need to sign in with Google, but it doesn't store any data, and only uses it to browse playlists 😊</p>
      <button onClick={() => login()}>Sign in with google 🚀</button>
    </div>
  )
}

export default Login
