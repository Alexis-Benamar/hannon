import { useMemo, useState } from 'react'

import usePlaylist from 'hooks/usePlaylist'
import { PlaylistSortType } from 'types/playlist'

import PlaylistItem from './PlaylistItem'

interface VideosProps {
  playlistId: string
  ownChannelId: string
}

const Videos = ({ playlistId, ownChannelId }: VideosProps) => {
  const [search, setSearch] = useState('')
  const [sort, setSort] = useState<PlaylistSortType>('default')

  const { useGetPlaylistItems } = usePlaylist()
  const { data: playlistItems } = useGetPlaylistItems(playlistId ?? '')

  const sortedPlaylistItems = useMemo(() => {
    return playlistItems.sort((a, b) => {
      switch (sort) {
        case 'title':
          return a.snippet.title.localeCompare(b.snippet.title)
        case 'firstAdded':
          return b.snippet.position - a.snippet.position
        default:
          return a.snippet.position - b.snippet.position
      }
    })
  }, [playlistItems, sort])

  return (
    <>
      <div style={{ display: 'flex', marginBottom: '1rem' }}>
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search by title, channel name..."
          style={{ flexGrow: 1 }}
        />
        <select
          onChange={(e) => setSort(e.target.value as PlaylistSortType)}
          style={{ flexBasis: 300, marginLeft: '1rem' }}
        >
          <optgroup label="sort by">
            <option value="default">last added (default)</option>
            <option value="firstAdded">first added</option>
            <option value="title">title</option>
          </optgroup>
        </select>
      </div>
      {!sortedPlaylistItems || sortedPlaylistItems.length === 0 ? null : (
        <ul style={{ listStyle: 'none', paddingLeft: 0 }}>
          {sortedPlaylistItems?.map((playlistItem) => {
            const title = playlistItem.snippet.title.toLowerCase()
            const channelTitle = playlistItem.snippet.videoOwnerChannelTitle?.toLowerCase() ?? ''

            const shouldDisplay =
              title.indexOf(search.toLocaleLowerCase()) !== -1 ||
              channelTitle.indexOf(search.toLocaleLowerCase()) !== -1

            return (
              <PlaylistItem
                key={playlistItem.id}
                channelId={ownChannelId}
                playlistItem={playlistItem}
                shouldDisplay={shouldDisplay}
              />
            )
          })}
        </ul>
      )}
    </>
  )
}

export default Videos
