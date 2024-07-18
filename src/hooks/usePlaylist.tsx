import { useContext } from 'react'

import { useSuspenseQuery } from '@tanstack/react-query'
import { getPlaylistItems, getPlaylists } from 'api/playlist'
import { AuthContext } from 'context/Auth'
import { Playlist, PlaylistItem } from 'types/playlist'

const usePlaylist = () => {
  const { credentials } = useContext(AuthContext)

  const useGetPlaylists = () =>
    useSuspenseQuery<Playlist[]>({
      queryKey: ['playlists'],
      queryFn: () => getPlaylists(credentials),
      staleTime: 10 * 60 * 1000, // 2 minutes
    })

  const useGetPlaylistItems = (playlistId: string) =>
    useSuspenseQuery<PlaylistItem[]>({
      queryKey: ['playlists', playlistId],
      queryFn: () => getPlaylistItems(playlistId, credentials),
      staleTime: 5 * 60 * 1000, // 5 minutes
    })

  return {
    useGetPlaylists,
    useGetPlaylistItems,
  }
}

export default usePlaylist
