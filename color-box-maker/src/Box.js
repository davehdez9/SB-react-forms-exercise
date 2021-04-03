import React from 'react'


const Box =  ({ id, removeBox, background, width, height }) => {
    
    const remove = () => removeBox(id)
    return (
        <div>
            <div style={{ 
                width: `${width}em`, 
                height: `${height}em`,
                backgroundColor: background,
                margin: '10px'
                }}
            />
            <button style={{display:'flex', margin:'10px 0px'}} onClick={remove}>Remove Box!</button>
        </div>
        
    )
}

export default Box