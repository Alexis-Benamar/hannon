import { useNavigate } from 'react-router-dom'

const About = () => {
  const navigate = useNavigate()

  const handleGoBack = () => navigate(-1)

  return (
    <div>
      <h2>
        <button className="normal" onClick={handleGoBack} style={{ margin: 0, marginRight: 20 }}>
          ⬅️
        </button>
        about
      </h2>
      <section>
        <h3>Youtube's playlist interface is silly</h3>
        <p>
          It may work fine in some cases, but I find it struggling when playlists have more and more items. I personally
          have one or two with hundreds of videos (respectively food and bass covers), and you cannot have them all
          displayed in one go, everything is <em>paginated with 50 max items per lot</em>, with the next batch of videos
          fetched once you reach the bottom of the page. So, searching a specific title is out of the question. Don't
          get me started on the time it takes to scroll through it.
        </p>
      </section>
      <section>
        <h3>
          Why not load <em>all</em> videos in a playlist at once ?
        </h3>
        <p>
          The funny thing is that it is actually provided as an{' '}
          <a href="https://developers.google.com/youtube/v3/docs/playlistItems/list?hl=en#examples" target="_blank">
            example in youtube API's docs
          </a>
          . When you call it to get playlist items, one of the (optional) parameters is <code>pageToken</code>. It lets
          the API load the "page" of data you want to load. And, in the response, if there are still more items to be
          fetched, you will find a <code>nextPageToken</code>. So you just have to repeatedly query the API until{' '}
          <code>nextPageToken</code> is no longer present, and there you have it ! The <em>entire</em> playlist content.
        </p>
        <p>
          I'd rather wait a few seconds (it takes ~8 seconds for about a thousand videos) upfront and then browse freely
          than repeatedly have stop and wait 😊
        </p>
      </section>
      <section>
        <h3>Behold, my liege, thy mighty charriot</h3>
        <p>
          <a href="https://fr.wikipedia.org/wiki/Hannon_le_Navigateur" target="_blank">
            Hannon
          </a>{' '}
          is really simple: you log in with your youtube account, it fetches your playlists, and if you click one of
          them it fetches the videos within.
        </p>
        <p>It's a React app made with Vite, and makes use of really cool tricks:</p>
        <ul>
          <li>
            <a href="https://tanstack.com/query/latest" target="_blank">
              TanStack Query
            </a>{' '}
            - JS library for data caching{' '}
            <span className="muted">(so we don't have to reload a huge playlist everytime)</span>
          </li>
          <li>
            <em>everything</em> is rendered - but not all is shown{' '}
            <span className="muted">
              (hiding elements with css <code>visibility</code> is cheaper than adding/removing them from the DOM)
            </span>
          </li>
        </ul>
      </section>
    </div>
  )
}

export default About
