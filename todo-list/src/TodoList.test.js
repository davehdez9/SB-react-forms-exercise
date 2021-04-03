import React from 'react'
import { render, fireEvent } from "@testing-library/react"
import TodoList from './TodoList'

it("renders without crashing", function(){
    render(<TodoList />)
})

it("matches snapshot", function(){
    const { asFragment } = render(<TodoList />)
    expect(asFragment()).toMatchSnapshot()
})

it('Should Add new todo', function() {
    const todoList = render(<TodoList />)
    expect(todoList.queryByText("Delete")).not.toBeInTheDocument()

    const AddTodo = todoList.queryByLabelText("Add New Todo")
    fireEvent.change(AddTodo, {target: {value: "test1"}})
    const btn = todoList.getByText("Add Todo")
    fireEvent.click(btn)
    expect(todoList.queryByText("Delete")).toBeInTheDocument()
})

it("Should Remove a Box", function() {
    const todoList = render(<TodoList />)
    expect(todoList.queryByText("Delete")).not.toBeInTheDocument()

    const AddTodo = todoList.queryByLabelText("Add New Todo")
    fireEvent.change(AddTodo, {target: {value: "test1"}})
    const btn = todoList.getByText("Add Todo")
    fireEvent.click(btn)

    const removeTodo = todoList.getByText("Delete")
    fireEvent.click(removeTodo)
    expect(removeTodo).not.toBeInTheDocument()


})