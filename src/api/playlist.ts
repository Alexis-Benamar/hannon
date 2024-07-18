import { AuthResponse } from 'types/auth'
import { PlaylistItem, PlaylistItemReponse, PlaylistResponse } from 'types/playlist'
import { delay } from 'util/helpers'

export const getPlaylists = async (credentials: AuthResponse | null) => {
  const response = await fetch('https://www.googleapis.com/youtube/v3/playlists?part=snippet&mine=true&maxResults=50', {
    headers: {
      Authorization: `Bearer ${credentials?.access_token}`,
    },
  })
  const dataAsJSON: PlaylistResponse = await response.json()
  return dataAsJSON.items
}

export const getPlaylistItems = async (playlistId: string, credentials: AuthResponse | null) => {
  let fetchNext = true
  let pageToken = ''
  const playlistItems: PlaylistItem[] = []

  // We call the API until we don't have `nextPageToken` in the response
  while (fetchNext) {
    const response = await fetch(
      `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=50&pageToken=${pageToken}&playlistId=${playlistId}`,
      {
        headers: {
          Authorization: `Bearer ${credentials?.access_token}`,
        },
      },
    )

    const responseAsJSON: PlaylistItemReponse = await response.json()
    playlistItems.push(...responseAsJSON.items)

    if (responseAsJSON.nextPageToken) {
      pageToken = responseAsJSON.nextPageToken
      await delay(50)
    } else {
      fetchNext = false
    }
  }

  return playlistItems
}
