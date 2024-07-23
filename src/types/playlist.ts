export type PlaylistResponse = {
  kind: 'youtube#playlistListResponse'
  etag: string
  nextPageToken: string
  prevPageToken: string
  pageInfo: {
    totalResults: number
    resultsPerPage: number
  }
  items: Playlist[]
}

export type Playlist = {
  kind: 'youtube#playlist'
  etag: string
  id: string
  snippet: {
    publishedAt: string
    channelId: string
    title: string
    description: string
    thumbnails: Record<string, Thumbnail>
    channelTitle: string
    defaultLanguage: string
    localized: {
      title: string
      description: string
    }
  }
  status: {
    privacyStatus: string
  }
  contentDetails: {
    itemCount: number
  }
  player: {
    embedHtml: string
  }
  localizations: Record<
    string,
    {
      title: string
      description: string
    }
  >
}

export type Thumbnail = {
  url: string
  width: number
  height: number
}

export type PlaylistItemReponse = {
  kind: 'youtube#playlistItemListResponse'
  etag: string
  nextPageToken?: string
  prevPageToken?: string
  pageInfo: {
    totalResults: number
    resultsPerPage: number
  }
  items: PlaylistItemType[]
}

export type PlaylistItemType = {
  kind: 'youtube#playlistItem'
  etag: string
  id: string
  snippet: {
    publishedAt: string
    channelId: string
    title: string
    description: string
    thumbnails: Record<string, Thumbnail>
    channelTitle: string
    videoOwnerChannelTitle: string
    videoOwnerChannelId: string
    playlistId: string
    position: number
    resourceId: {
      kind: string
      videoId: string
    }
  }
  contentDetails: {
    videoId: string
    startAt: string
    endAt: string
    note: string
    videoPublishedAt: string
  }
  status: {
    privacyStatus: string
  }
}

export type PlaylistSortType = 'default' | 'firstAdded' | 'title'
