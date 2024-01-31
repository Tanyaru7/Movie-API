import React from 'react'
import SearchForm from '../SearchForm/SearchForm'
import BtnLightMode from '../BtnLightMode/BtnLightMode'
import { GiCctvCamera } from 'react-icons/gi'

const Header = ({ search, onSearchChange, onSearchSubmit }) => {
	return (
		<header className='header'>
			<h1>
				TrailerBank <GiCctvCamera />
			</h1>

			<div className='header-container'>
				<BtnLightMode />
				<SearchForm
					search={search}
					onSearchChange={onSearchChange}
					onSearchSubmit={onSearchSubmit}
				/>
			</div>
		</header>
	)
}

export default Header
