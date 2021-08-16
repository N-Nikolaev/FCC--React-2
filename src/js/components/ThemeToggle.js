import React, { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoon, faSun } from '@fortawesome/free-regular-svg-icons'

const ThemeToggle = () => {
    const [ isDarkTheme, setIsDarkTheme ] = useState(true)

    useEffect(()=> {
        isDarkTheme 
        ? document.body.dataset.theme = "dark"
        : document.body.dataset.theme = "light"
    }, [isDarkTheme])

    const toggleDark = () => { setIsDarkTheme(!isDarkTheme) }

    return (
        <button 
            className="themeToggle"
            onClick={toggleDark}>
            <FontAwesomeIcon
                icon={isDarkTheme ? faSun : faMoon}
                size='2x' />
        </button>
    )
}

export default ThemeToggle
