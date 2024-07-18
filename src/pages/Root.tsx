import { Suspense, useContext } from 'react'

import blobBoat from 'assets/blob-boat.png'
import { AuthContext } from 'context/Auth'
import { Outlet, useNavigate } from 'react-router-dom'

const Root = () => {
  const { credentials, logout } = useContext(AuthContext)
  const navigate = useNavigate()

  return (
    <>
      <nav style={{ alignItems: 'center', justifyContent: 'space-between', paddingBlock: '1.5rem' }}>
        <p
          className="flex center larger bold pointer"
          style={{ margin: 0, fontSize: '2rem' }}
          onClick={() => navigate('/')}
        >
          Hannon <img src={blobBoat} width={48} height={48} style={{ display: 'inline-block', marginLeft: 10 }} />
        </p>
        {credentials ? (
          <button className="normal" style={{ margin: 0 }} onClick={() => logout()}>
            Logout
          </button>
        ) : null}
      </nav>
      <Suspense fallback={'Loading...'}>
        <Outlet />
      </Suspense>
    </>
  )
}

export default Root
