import { memo } from 'react'

import { PlaylistItemType } from 'types/playlist'

import CardLink from './CardLink'

interface PlaylistItemProps {
  channelId: string
  playlistItem: PlaylistItemType
  shouldDisplay?: boolean
}

const PlaylistItem = memo(function ({ channelId, playlistItem, shouldDisplay = true }: PlaylistItemProps) {
  const isNotAvailable =
    !['public', 'unlisted'].includes(playlistItem.status.privacyStatus) &&
    channelId !== playlistItem.snippet.videoOwnerChannelId

  if (isNotAvailable) return null

  return (
    <CardLink
      href={`https://www.youtube.com/watch?v=${playlistItem.snippet.resourceId.videoId}`}
      hidden={!shouldDisplay}
    >
      <div style={{ flexShrink: 0, width: 100, aspectRatio: '16 / 9' }}>
        <img
          loading="lazy"
          style={{ height: '100%', width: 100, aspectRatio: '16 / 9', objectFit: 'cover' }}
          src={playlistItem.snippet.thumbnails['default'].url}
        />
      </div>
      <div style={{ paddingBlock: '0.25rem' }}>
        <p style={{ margin: 0, paddingInline: '1rem' }}>{playlistItem.snippet.title}</p>
        <p className="smaller muted italic" style={{ margin: 0, paddingInline: '1rem' }}>
          {playlistItem.snippet.videoOwnerChannelTitle}
        </p>
      </div>
    </CardLink>
  )
})

export default PlaylistItem
