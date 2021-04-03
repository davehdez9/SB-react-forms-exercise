import React, { useState } from 'react'
import NewTodoForm from './NewTodoForm'
import Todo from './Todo'

const TodoList = () => {
    const [todo, setTodo] = useState([])
    const addTodo = (newTodo) => {
        setTodo(todo => [...todo, newTodo])
    }
    const remove = id => {
        setTodo(todos => todos.filter(todo => todo.id != id))
    }

    return (
        <div>
            <h2>Todo List</h2>
            <NewTodoForm addData={addTodo}/>
            <div>
                {todo.map( ({ id, todo }) => 
                    <Todo 
                        key={id}
                        id={id}
                        todo={todo}
                        removeTodo={remove}
                    />)}
            </div>
        </div>
    )
}

export default TodoList