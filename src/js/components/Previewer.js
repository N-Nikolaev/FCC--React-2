import React, { useEffect } from 'react'
import marked from 'marked'
import DOMPurify from 'dompurify'
import Prism from 'prismjs'
import "../../scss/prism.css"

const Previewer = ({ markdown }) => {

    const cleanMarkdown = markdown => {
        const sanitizer = DOMPurify.sanitize;
                
        marked.setOptions({
            breaks: true,
            highlight: function (code) {
                return Prism.highlight(code, Prism.languages.javascript, 'javascript')
            }
        });

        const sanitizedMarkdown = sanitizer(marked(markdown));
        return { __html: sanitizedMarkdown || '' };
    }

    useEffect(() => {
        Prism.highlightAll();
    })

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
