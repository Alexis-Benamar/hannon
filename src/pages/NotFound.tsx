import { useNavigate } from 'react-router-dom'

import Footer from 'components/Footer'
import Header from 'components/Header'

const NotFound = () => {
  const navigate = useNavigate()
  return (
    <>
      <Header />
      <h2>Page not found</h2>
      <div>
        <button onClick={() => navigate(-1)}>⬅️ go back</button>
      </div>
      <Footer />
    </>
  )
}

export default NotFound
