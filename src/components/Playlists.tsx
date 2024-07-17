import usePlaylist from 'hooks/usePlaylist'
import { Link } from 'react-router-dom'

const Playlists = () => {
  const { useGetPlaylists } = usePlaylist()
  const { data: playlists } = useGetPlaylists()

  return !playlists || playlists.length === 0 ? null : (
    <ul>
      {playlists.map((playlist) => (
        <li key={playlist.id}>
          <Link to={`/playlist/${playlist.id}`}>{playlist.snippet.title}</Link>
        </li>
      ))}
    </ul>
  )
}

export default Playlists
