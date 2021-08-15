import React, { useState } from 'react'
import Editor from './components/Editor'
import Previewer from './components/Previewer'

const App = () => {

    const exampleMarkdown = `
# Welcome to my React Markdown Previewer!

## This is a sub-heading...
### And here's some other cool stuff:
    `

    const [markdown, setMarkdown] = useState(exampleMarkdown)

    return (
        <main className='app'>
            <div className="wrapper">
                <Editor 
                    markdown={markdown} 
                    setMarkdown={setMarkdown} />
                <Previewer markdown={markdown}/>
            </div>
        </main>
    )
}

export default App;