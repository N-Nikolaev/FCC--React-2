import React, { useState } from 'react'
import { FontAwesomeIcon, faMoon } from '@fortawesome/react-fontawesome'

const ThemeToggle = () => {
    const [ theme, setTheme ] = useState('light')



    return (
        <div>
            <button className="themeToggle">
                <FontAwesomeIcon
                    icon={faMoon}
                    size='2x' />
            </button>
        </div>
    )
}

export default ThemeToggle
