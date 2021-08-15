import React, { useState } from 'react'
import Editor from './components/Editor'
import Previewer from './components/Previewer'

const App = () => {

    const [markdown, setMarkdown] = useState('')

    return (
        <div className='app'>
            <div className="wrapper">
                <Editor 
                    markdown={markdown} 
                    setMarkdown={setMarkdown} />
                <Previewer markdown={markdown}/>
            </div>
        </div>
    )
}

export default App;