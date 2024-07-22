import { PlaylistItemType } from 'types/playlist'

import Card from './Card'
import CardLink from './CardLink'

interface PlaylistItemProps {
  channelId: string
  playlistItem: PlaylistItemType
}

const PlaylistItem = ({ channelId, playlistItem }: PlaylistItemProps) => {
  const shouldBeMuted =
    !['public', 'unlisted'].includes(playlistItem.status.privacyStatus) &&
    channelId !== playlistItem.snippet.videoOwnerChannelId

  if (shouldBeMuted) {
    return (
      <Card disabled>
        <i className="muted small">{playlistItem.snippet.title}</i>
      </Card>
    )
  }

  return (
    <CardLink href={`https://www.youtube.com/watch?v=${playlistItem.snippet.resourceId.videoId}`}>
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
}

export default PlaylistItem
