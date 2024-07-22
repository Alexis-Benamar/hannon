import { PlaylistItemType } from 'types/playlist'

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
      <li key={playlistItem.id}>
        <i className="muted small">
          {'< '}
          {playlistItem.snippet.title}
          {' >'}
        </i>
      </li>
    )
  }

  return <li key={playlistItem.id}>{playlistItem.snippet.title}</li>
}

export default PlaylistItem
