import style from './Pagination.module.css'

const Pagination = ({ page, setPage, fetchMovies }) => {
	const Previous = () => {
		if (page > 1) {
			setPage(page - 1)
			fetchMovies(page - 1)
		}
	}

	const Next = () => {
		if (page < 10) {
			setPage(page + 1)
			fetchMovies(page + 1)
		}
	}

	return (
		<div className={style.paginationContainer}>
			<button className={style.btn} onClick={Previous}>
				Previous
			</button>
			<button className={style.btn} onClick={Next}>
				Next
			</button>
		</div>
	)
}
export default Pagination
