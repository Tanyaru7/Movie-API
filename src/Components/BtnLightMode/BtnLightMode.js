import React from 'react'
import { useState, useEffect, useRef } from 'react'
import { FiSun } from 'react-icons/fi'
import { FaRegMoon } from 'react-icons/fa6'
import style from './BtnLightMode.module.css'

const BtnLightMode = () => {
	const [lightMode, setlightMode] = useState('Dark')
	const btnRef = useRef(null)

	useEffect(() => {
		if (lightMode === 'Light') {
			document.body.classList.add('light')
			btnRef.current.classList.add('lightModeBtnActive')
		} else {
			document.body.classList.remove('light')
			btnRef.current.classList.remove('lightModeBtnActive')
		}
	}, [lightMode])

	const togglelightMode = () => {
		setlightMode((currentValue) => {
			return currentValue === 'Light' ? 'Dark' : 'Light'
		})
	}

	return (
		<button
			ref={btnRef}
			onClick={togglelightMode}
			className={style.lightModeBtn}
		>
			<FaRegMoon className={style.btnIcon}></FaRegMoon>
			<FiSun className={style.btnIcon}></FiSun>
		</button>
	)
}

export default BtnLightMode
