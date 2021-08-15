import React from 'react'
import marked from 'marked'
import DOMPurify from 'dompurify'

const Previewer = ({ markdown }) => {
    // Temp markdown display

    const cleanMarkdown = markdown => {
        const sanitizer = DOMPurify.sanitize;
        const sanitizedMarkdown = sanitizer(marked(markdown));
        return { __html: sanitizedMarkdown };
    }

    return (
        <div 
            id="preview" 
            className="previewer"
            dangerouslySetInnerHTML={ markdown ? cleanMarkdown(markdown) : 'No Markdown :C'} /> 
    )
}

export default Previewer
