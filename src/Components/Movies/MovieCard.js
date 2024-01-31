import React from 'react'
import style from './MovieCard.module.css'

const IMAGE_PATH = 'https://image.tmdb.org/t/p/w500'
const unavailable =
	'https://images.unsplash.com/photo-1509281373149-e957c6296406?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fG1vdmllfGVufDB8fDB8fHww'

const MovieCard = ({ movie, selectMovie }) => {
	if (!movie || typeof selectMovie !== 'function') {
		console.error('Invalid movie or selectMovie function:', movie, selectMovie)
		return null
	}

	const handleOnClick = () => {
		selectMovie(movie)
		window.scrollTo(0, 0)
	}

	return (
		<div className={style.container} onClick={handleOnClick}>
			{movie.poster_path ? (
				<img
					src={`${IMAGE_PATH}${movie.poster_path}`}
					className={style.poster}
					alt='movie'
				/>
			) : (
				<img
					src={unavailable}
					className={style.poster}
					alt='unavailable'
					style={{ width: '100%', height: '80%' }}
				/>
			)}
			<h3 className={style.title}>{movie.title}</h3>
		</div>
	)
}

export default MovieCard
