import { useContext } from 'react'

import blobBoat from 'assets/blob-boat.png'
import { useNavigate } from 'react-router-dom'

import { AuthContext } from 'context/Auth'

const Header = () => {
  const { getCredentials, logout } = useContext(AuthContext)
  const accessToken = getCredentials()
  const navigate = useNavigate()

  const handleLogout = () => {
    logout()
    navigate('/login')
  }

  return (
    <nav style={{ alignItems: 'center', justifyContent: 'space-between', paddingBlock: '1.5rem' }}>
      <p
        className="flex center larger bold pointer"
        style={{ margin: 0, fontSize: '2rem' }}
        onClick={() => navigate('/')}
      >
        Hannon <img src={blobBoat} width={48} height={48} style={{ display: 'inline-block', marginLeft: 10 }} />
      </p>
      {accessToken ? (
        <button className="normal" style={{ margin: 0 }} onClick={handleLogout}>
          Logout
        </button>
      ) : null}
    </nav>
  )
}

export default Header
