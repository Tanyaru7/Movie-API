import YouTube from 'react-youtube'
import style from './YouTubeTrailer.module.css'

const YouTubeTrailer = ({ selectMovie }) => {
	const key =
		selectMovie && selectMovie.videos && selectMovie.videos.results.length > 0
			? selectMovie.videos.results[0].key
			: null

	const opts = {
		width: '100%',
		height: '100%',
		playerVars: {
			autoplay: 1,
			controls: 1,
			origin: window.location.origin,
		},
	}

	return (
		<YouTube videoId={key} className={style.youtubeContainer} opts={opts} />
	)
}

export default YouTubeTrailer
