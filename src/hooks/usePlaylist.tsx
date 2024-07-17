import { useContext } from 'react'

import { AuthContext } from 'context/Auth'
import { useQuery } from 'react-query'
import { Playlist, PlaylistItem } from 'types/playlist'

const usePlaylist = () => {
  const { credentials } = useContext(AuthContext)

  const useGetPlaylists = () =>
    useQuery<Playlist[]>({
      queryKey: ['playlists'],
      queryFn: async () => {
        const response = await fetch(
          'https://www.googleapis.com/youtube/v3/playlists?part=snippet&mine=true&maxResults=50',
          {
            headers: {
              Authorization: `Bearer ${credentials?.access_token}`,
            },
          },
        )
        const dataAsJSON = await response.json()
        return dataAsJSON.items
      },
    })

  const useGetPlaylistItems = (playlistId: string) =>
    useQuery<PlaylistItem[]>({
      queryKey: ['playlists', playlistId],
      queryFn: async () => {
        const response = await fetch(
          `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=50&playlistId=${playlistId}`,
          {
            headers: {
              Authorization: `Bearer ${credentials?.access_token}`,
            },
          },
        )
        const dataAsJSON = await response.json()
        return dataAsJSON.items
      },
    })

  return {
    useGetPlaylists,
    useGetPlaylistItems,
  }
}

export default usePlaylist
