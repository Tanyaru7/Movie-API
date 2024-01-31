import React from 'react'
import MovieCard from './MovieCard'
import style from './MovieList.module.css'

const MovieList = ({ movies, selectMovieHandler }) => {
	return (
		<div className={style.container}>
			{movies.map((movie) => (
				<MovieCard
					key={movie.id}
					movie={movie}
					selectMovie={selectMovieHandler}
				/>
			))}
		</div>
	)
}

export default MovieList
