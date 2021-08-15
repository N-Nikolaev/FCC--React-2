import React from 'react'

const Editor = ({ markdown, setMarkdown }) => {
    return (
        <textarea 
            id="editor"
            className='editor'
            value={markdown}
            onChange={e => setMarkdown(e.target.value)}></textarea>
    )
}

export default Editor