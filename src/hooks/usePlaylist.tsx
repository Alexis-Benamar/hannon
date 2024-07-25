import { useSuspenseQuery } from '@tanstack/react-query'

import { getPlaylistItems, getPlaylists } from 'api/playlist'
import { Playlist, PlaylistItemType } from 'types/playlist'

const usePlaylist = () => {
  const useGetPlaylists = () =>
    useSuspenseQuery<Playlist[]>({
      queryKey: ['playlists'],
      queryFn: () => getPlaylists(),
      staleTime: 10 * 60 * 1000, // 2 minutes
    })

  const useGetPlaylistItems = (playlistId: string) =>
    useSuspenseQuery<PlaylistItemType[]>({
      queryKey: ['playlists', playlistId],
      queryFn: () => getPlaylistItems(playlistId),
      staleTime: 5 * 60 * 1000, // 5 minutes
    })

  return {
    useGetPlaylists,
    useGetPlaylistItems,
  }
}

export default usePlaylist
