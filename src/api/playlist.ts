import Cookies from 'js-cookie'

import { PlaylistItemReponse, PlaylistItemType, PlaylistResponse } from 'types/playlist'
import { delay } from 'util/helpers'

export const getPlaylists = async () => {
  const accessToken = Cookies.get('hannon-auth')
  const response = await fetch(
    'https://www.googleapis.com/youtube/v3/playlists?part=snippet,contentDetails&mine=true&maxResults=50',
    {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    },
  )
  const dataAsJSON: PlaylistResponse = await response.json()
  return dataAsJSON.items
}

export const getPlaylistItems = async (playlistId: string) => {
  const accessToken = Cookies.get('hannon-auth')
  let fetchNext = true
  let pageToken = ''
  const playlistItems: PlaylistItemType[] = []

  // We call the API until we don't have `nextPageToken` in the response
  while (fetchNext) {
    const response = await fetch(
      `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet,status&maxResults=50&pageToken=${pageToken}&playlistId=${playlistId}`,
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
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
