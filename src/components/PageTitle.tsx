import { ReactNode, useContext } from 'react'

import { AuthContext } from 'context/Auth'

const PageTitle = ({ children }: { children: ReactNode }) => {
  const { credentials, logout } = useContext(AuthContext)

  return (
    <h1 className="flex center space-between">
      {children}
      {credentials ? (
        <button className="normal" onClick={() => logout()}>
          Logout
        </button>
      ) : null}
    </h1>
  )
}

export default PageTitle
