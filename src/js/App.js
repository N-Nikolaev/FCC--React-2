import React, { useState, useEffect, useCallback } from 'react'
import Editor from './components/Editor'
import Previewer from './components/Previewer'

const App = () => {
    const readmePath = require("../assets/README.txt"); // Had to create a text copy for the raw README.md
    const [markdown, setMarkdown] = useState('')

    const fetchREADME = useCallback(() => {
        fetch(readmePath)
            .then(res => res.text())
            .then(text => setMarkdown(text))
            .catch(err => console.log(err))
    })

    useEffect(() => {
        fetchREADME();
    },[])

    return (
        <main className='app'>
            <h1 className='app__name'>Markdown Previewer</h1>
            <Editor 
                markdown={markdown} 
                setMarkdown={setMarkdown} />
            <Previewer markdown={markdown}/>
        </main>
    )
}

export default App;