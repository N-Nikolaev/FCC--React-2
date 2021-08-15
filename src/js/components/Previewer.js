import React from 'react'
import marked from 'marked'
import DOMPurify from 'dompurify'

const Previewer = ({ markdown }) => {

    const cleanMarkdown = markdown => {
        const sanitizer = DOMPurify.sanitize;
        const sanitizedMarkdown = sanitizer(marked(markdown));
        console.log(sanitizedMarkdown)
        return { __html: sanitizedMarkdown || 'No Markdown :C' };
    }

    return (
        <div 
            id="preview" 
            className="previewer"
            dangerouslySetInnerHTML={cleanMarkdown(markdown)} /> 
    )
}

export default Previewer
