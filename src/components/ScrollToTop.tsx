import { useEffect, useState } from 'react'

import throttle from 'lodash.throttle'

const ScrollToTop = () => {
  const [visible, setVisible] = useState(false)

  const handleScrollToTop = () => {
    window.scroll({
      top: 0,
      behavior: 'smooth',
    })
  }

  useEffect(() => {
    const handleOnScroll = throttle(() => {
      if (!visible && window.scrollY > 750) {
        setVisible(true)
      }

      if (visible && window.scrollY < 750) {
        setVisible(false)
      }
    }, 100)

    window.addEventListener('scroll', handleOnScroll)

    return () => {
      window.removeEventListener('scroll', handleOnScroll)
    }
  }, [visible])

  return (
    <div className={`flex center align-center scroll-to-top ${visible ? 'visible' : ''}`} onClick={handleScrollToTop}>
      ⬆️
    </div>
  )
}

export default ScrollToTop
