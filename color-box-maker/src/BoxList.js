import React, { useState } from 'react'
import Box from './Box'
import NewBoxForm from './NewBoxForm'

const BoxList = () => {

    const [boxes, setBoxes] = useState([])
    const addBox = (newBox) => {
        setBoxes(boxes => [...boxes, newBox])
    }
    const remove = id => {
        setBoxes(boxes => boxes.filter(box => box.id != id))
    }
    return (
        <div>
            <h2>Color Box Maker</h2>
            <NewBoxForm addData={addBox}/>
            <div style={{display:'flex'}}>
                {boxes.map(({id, width, height, background}) => 
                    <Box
                        key={id} 
                        id={id} 
                        width={width} 
                        height={height} 
                        background={background}
                        removeBox={remove}
                    />)}
            </div>
        </div>
    )
}

export default BoxList