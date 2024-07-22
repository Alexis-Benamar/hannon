import { useMemo } from 'react'

import usePlaylist from 'hooks/usePlaylist'
import { useNavigate } from 'react-router-dom'

import Card from './Card'

const Playlists = () => {
  const navigate = useNavigate()
  const { useGetPlaylists } = usePlaylist()
  const { data: playlists } = useGetPlaylists()

  const orderedPlaylists = useMemo(
    () => playlists.sort((a, b) => a.snippet.title.localeCompare(b.snippet.title)),
    [playlists],
  )

  return !orderedPlaylists || orderedPlaylists.length === 0 ? null : (
    <ul style={{ listStyle: 'none', paddingLeft: 0 }}>
      {orderedPlaylists.map((playlist) => (
        <Card onClick={() => navigate(`/playlist/${playlist.id}`)}>
          <em>{playlist.snippet.title}</em> -{' '}
          <small>
            <b>{playlist.contentDetails.itemCount}</b> vid{playlist.contentDetails.itemCount > 1 ? 's' : ''}
          </small>
        </Card>
      ))}
    </ul>
  )
}

export default Playlists
