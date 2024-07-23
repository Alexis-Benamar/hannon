import { memo } from 'react'

import { useNavigate } from 'react-router-dom'

interface PlaylistTitleProps {
  title?: string
}

const PlaylistTitle = memo(function ({ title = '' }: PlaylistTitleProps) {
  const navigate = useNavigate()

  const handleGoBack = () => navigate('/')

  return (
    <h2>
      <button className="normal" onClick={handleGoBack} style={{ margin: 0, marginRight: 20 }}>
        ⬅️
      </button>
      {title}
    </h2>
  )
})

export default PlaylistTitle
