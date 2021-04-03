import React from 'react'

const Todo = ({id, todo, removeTodo}) => {
    const remove = () => removeTodo(id)
    return (
        <div>
            <ul>
                <li>{todo}</li>
                <button onClick={remove}>Delete</button>
            </ul>
        </div>
    )
}

export default Todo