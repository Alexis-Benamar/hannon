import { useQueryClient } from '@tanstack/react-query'
import { useParams } from 'react-router-dom'
import { Playlist } from 'types/playlist'

import PlaylistTitle from 'components/PlaylistTitle'
import Videos from 'components/Videos'

const PlaylistView = () => {
  const { id: playlistId } = useParams<{ id: string }>()
  const queryClient = useQueryClient()
  const playlistsData = queryClient.getQueryData<Playlist[]>(['playlists'])

  const playlistInfo = playlistsData?.find((playlist) => playlist.id === playlistId)
  const playlistTitle = playlistInfo?.snippet.title ?? ''

  return (
    <>
      <PlaylistTitle title={playlistTitle} />
      {/* TODO: wrap Videos inside Suspense */}
      <Videos playlistId={playlistId ?? ''} ownChannelId={playlistInfo?.snippet.channelId ?? ''} />
    </>
  )
}

export default PlaylistView
