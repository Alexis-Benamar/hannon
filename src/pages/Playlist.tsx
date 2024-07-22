import { useQueryClient } from '@tanstack/react-query'
import usePlaylist from 'hooks/usePlaylist'
import { useNavigate, useParams } from 'react-router-dom'
import { Playlist } from 'types/playlist'

import PlaylistItem from 'components/PlaylistItem'

const PlaylistView = () => {
  const { id: playlistId } = useParams<{ id: string }>()
  const navigate = useNavigate()
  const queryClient = useQueryClient()

  const playlistsData = queryClient.getQueryData<Playlist[]>(['playlists'])
  const playlistInfo = playlistsData?.find((playlist) => playlist.id === playlistId)

  const { useGetPlaylistItems } = usePlaylist()
  const { data: playlistItems } = useGetPlaylistItems(playlistId ?? '')

  const handleGoBack = () => navigate('/')

  return (
    <>
      <h2>
        <button className="normal" onClick={handleGoBack} style={{ margin: 0, marginRight: 20 }}>
          ⬅️
        </button>
        {playlistInfo?.snippet.title}
      </h2>
      {!playlistItems || playlistItems.length === 0 ? null : (
        <ul style={{ listStyle: 'none', paddingLeft: 0 }}>
          {playlistItems?.map((playlistItem) => (
            <PlaylistItem
              key={playlistItem.id}
              channelId={playlistInfo?.snippet.channelId ?? ''}
              playlistItem={playlistItem}
            />
          ))}
        </ul>
      )}
    </>
  )
}

export default PlaylistView
