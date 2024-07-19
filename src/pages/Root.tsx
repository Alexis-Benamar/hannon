import { Suspense } from 'react'

import { Outlet } from 'react-router-dom'

import Footer from 'components/Footer'
import Header from 'components/Header'

const Root = () => {
  return (
    <>
      <Header />
      {/* TODO: maybe a better loading component */}
      <Suspense fallback={'Loading...'}>
        <Outlet />
      </Suspense>
      <Footer />
    </>
  )
}

export default Root
