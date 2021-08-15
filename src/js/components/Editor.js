import React from 'react'

const Editor = ({ markdown, setMarkdown }) => {
    return (
        <section className="editor">
            <header className="editor__header">
                <h2 className="editor__title">Markdown</h2>
            </header>
            <textarea 
                id="editor"
                className='editor__input'
                value={markdown}
                onChange={e => setMarkdown(e.target.value)}></textarea>
        </section>
    )
}

export default Editor