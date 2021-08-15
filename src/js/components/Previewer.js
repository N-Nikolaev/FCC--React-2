import React from 'react'

const Previewer = ({ markdown }) => {
    // Temp markdown display
    return (
        <div> 
            { markdown ? markdown : 'No Markdown :C'} 
        </div>
    )
}

export default Previewer
