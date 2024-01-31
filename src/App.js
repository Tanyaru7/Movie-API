import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './App.css'
import Pagination from './Components/Pagination/Pagination'
import MovieList from './Components/Movies/MovieList'
import MovieDetails from './Components/Movies/MovieDetails'
import Header from './Components/Header/Header'
import MyFooter from './Components/Footer/Footer.js'

const API_KEY = process.env.REACT_APP_MOVIE_API_KEY
const URL_API = 'https://api.themoviedb.org/3/'
const MOVIE_API = URL_API + 'discover/movie'
const SEARCH_API = URL_API + 'search/movie'

const App = () => {
	const [movies, setMovies] = useState([])
	const [search, setSearch] = useState('')
	const [selectedMovie, setSelectedMovie] = useState(null)
	const [playTrailer, setPlayTrailer] = useState(false)
	const [page, setPage] = useState(1)

	useEffect(() => {
		fetchMovies()
		// eslint-disable-next-line
	}, [])

	const fetchMovies = async (searchQuery = '', pageNumber = 1) => {
		try {
			const {
				data: { results },
			} = await axios.get(searchQuery ? SEARCH_API : MOVIE_API, {
				params: {
					api_key: API_KEY,
					query: searchQuery,
					page: pageNumber,
				},
			})

			if (results.length > 0) {
				setMovies(results)
				selectMovieHandler(results[0])
			} else {
				console.error('No movies found.')
			}
		} catch (error) {
			console.error('Error fetching movies:', error)
		}
	}

	const fetchMovie = async (id) => {
		try {
			const { data } = await axios.get(`${URL_API}movie/${id}`, {
				params: {
					api_key: API_KEY,
					append_to_response: 'videos',
				},
			})

			if (!data) {
				console.error('Movie details not found:', id)
				return null
			}

			return data
		} catch (error) {
			console.error(`Error fetching movie details for ID ${id}:`, error)
			throw error
		}
	}

	const selectMovieHandler = async (selectedMovie) => {
		try {
			const movieDetails = await fetchMovie(selectedMovie.id)
			setSelectedMovie(movieDetails)
			setPlayTrailer(false)
		} catch (error) {
			console.error('Error selecting movie:', error)
		}
	}

	const searchMovies = (e) => {
		e.preventDefault()
		fetchMovies(search)
	}

	const myMovieSearch = (e) => {
		setSearch(e.target.value)
	}

	return (
		<>
			<Header
				search={search}
				onSearchChange={myMovieSearch}
				onSearchSubmit={searchMovies}
			/>

			<MovieDetails
				selectMovie={selectedMovie}
				playTrailer={playTrailer}
				onPlayTrailer={() => setPlayTrailer(true)}
				onCloseTrailer={() => setPlayTrailer(false)}
			/>

			<MovieList movies={movies} selectMovieHandler={selectMovieHandler} />

			<Pagination
				page={page}
				setPage={setPage}
				fetchMovies={(newPage) => fetchMovies(search, newPage)}
			/>

			<MyFooter />
		</>
	)
}

export default App
