import React from 'react'
import YouTubeTrailer from './YouTubeTrailer'
import style from './MovieDetails.module.css'

const BACKDROP_PATH = 'https://image.tmdb.org/t/p/w1280'

const MovieDetails = ({
	selectMovie,
	playTrailer,
	onPlayTrailer,
	onCloseTrailer,
}) => {
	if (!selectMovie) {
		return null
	}

	return (
		<div
			className={style.firstMovie}
			style={{
				backgroundImage: `url(${
					selectMovie.backdrop_path
						? BACKDROP_PATH + selectMovie.backdrop_path
						: ''
				})`,
			}}
		>
			{selectMovie.videos && playTrailer ? (
				<YouTubeTrailer selectMovie={selectMovie} />
			) : null}
			<h2>{selectMovie.title}</h2>

			<div>
				<p className={style.text}>
					{selectMovie.overview ? selectMovie.overview : null}
				</p>
				{playTrailer ? (
					<button className={style.closeButton} onClick={onCloseTrailer}>
						Close
					</button>
				) : null}
				{selectMovie.videos && !playTrailer ? (
					<button className={style.playButton} onClick={onPlayTrailer}>
						Play Trailer
					</button>
				) : null}
			</div>
		</div>
	)
}

export default MovieDetails
