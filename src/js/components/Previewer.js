import React from 'react'
import marked from 'marked'
import DOMPurify from 'dompurify'

const Previewer = ({ markdown }) => {

    const cleanMarkdown = markdown => {
        const sanitizer = DOMPurify.sanitize;
        const sanitizedMarkdown = sanitizer(marked(markdown, {breaks: true}));
        console.log(sanitizedMarkdown)
        return { __html: sanitizedMarkdown || '' };
    }

    return (
        <section className="previewer">
            <header className="previewer__header">
                <h2 className="previewer__title">Preview</h2>
            </header>
            <div 
                id="preview" 
                className="previewer__output"
                dangerouslySetInnerHTML={cleanMarkdown(markdown)} /> 
        </section>
    )
}

export default Previewer
