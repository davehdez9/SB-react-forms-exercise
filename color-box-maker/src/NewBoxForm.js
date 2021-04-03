import React, { useState } from 'react'
import { v4 as uuid } from 'uuid'

const NewBoxForm = ({ addData }) => {
    const INITIAL_STATE = {
        width: '',
        height: '',
        background: ''
    }

    const [formData, setFormData] = useState(INITIAL_STATE)

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData(formData => ({
            ...formData,
            [name]:value
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        addData({ ...formData, id: uuid() })
        setFormData(INITIAL_STATE)
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="width">Width</label>
                    <input
                        id="width"
                        type="text"
                        name="width"
                        value={formData.width}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label htmlFor="height">Height</label>
                    <input
                        id="height"
                        type="text"
                        name="height"
                        value={formData.height}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label htmlFor="background">Background</label>
                    <input
                        id="background"
                        type="text"
                        name="background"
                        value={formData.background}
                        onChange={handleChange}
                    />
                </div>
                <button onClick={handleSubmit}>Create Box</button>
            </form>
        </div>
    )
}

export default NewBoxForm