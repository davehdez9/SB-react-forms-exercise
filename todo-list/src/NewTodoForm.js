import React, { useState } from 'react'
import { v4 as uuid } from 'uuid'

const NewTodoForm = ({ addData }) => {
    const INITIAL_STATE = {
        todo: ''
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
        addData({...formData, id: uuid()})
        setFormData(INITIAL_STATE)
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="todo">Add New Todo</label>
                    <input 
                        id="todo"
                        type="text"
                        name="todo"
                        value={formData.todo}
                        onChange={handleChange}
                    />
                </div>
                <button onClick={handleSubmit}>Add Todo</button>
            </form>
        </div>
    )


}

export default NewTodoForm