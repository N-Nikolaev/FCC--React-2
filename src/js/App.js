import React from 'react'
import Editor from './components/Editor'
import Previewer from './components/Previewer'

const App = () => {
    return (
        <div className='app'>
            <div className="wrapper">
                <Editor />
                <Previewer />
            </div>
        </div>
    )
}

export default App;