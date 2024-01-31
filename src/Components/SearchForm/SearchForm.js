import React from 'react'
import { GrSearch } from 'react-icons/gr'
import style from './SearchForm.module.css'

function SearchForm({ search, onSearchChange, onSearchSubmit }) {
	return (
		<form className={style.searchForm} onSubmit={onSearchSubmit}>
			<input
				type='text'
				placeholder='Movie search'
				className={style.inputField}
				onChange={onSearchChange}
				value={search}
			/>
			<button type='submit' className={style.searchButton}>
				<GrSearch className='search-icon'></GrSearch>
			</button>
		</form>
	)
}

export default SearchForm
