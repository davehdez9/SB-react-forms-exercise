import React from 'react'
import {render, fireEvent} from "@testing-library/react"
import BoxList from './BoxList'

it("renders without crashing", function(){
    render(<BoxList />)
})

it("matches snapshot", function(){
    const { asFragment } = render(<BoxList />)
    expect(asFragment()).toMatchSnapshot()
})

it("Should add new box", function() {
    const  boxList = render(<BoxList />)
    
    expect(boxList.queryByText("Remove Box!")).not.toBeInTheDocument()
    
    // const { queryByText, queryByLabelText, getByText } = render(<BoxList/>)
    const heightLabel = boxList.queryByLabelText("Height")
    const widthLabel = boxList.queryByLabelText("Width")
    const backgroundLabel = boxList.queryByLabelText("Background")
    fireEvent.change(backgroundLabel, {target: {value: "blue"}})
    fireEvent.change(widthLabel, {target: {value: "3"}})
    fireEvent.change(heightLabel, {target: {value: "4"}})
    const btn = boxList.getByText("Create Box")
    fireEvent.click(btn)

    expect(boxList.queryByText("Remove Box!")).toBeInTheDocument()
})

it("Should remove a box", function(){
    const boxList = render(<BoxList />)

    const heightLabel = boxList.queryByLabelText("Height")
    const widthLabel = boxList.queryByLabelText("Width")
    const backgroundLabel = boxList.queryByLabelText("Background")
    fireEvent.change(backgroundLabel, {target: {value: "blue"}})
    fireEvent.change(widthLabel, {target: {value: "3"}})
    fireEvent.change(heightLabel, {target: {value: "4"}})
    const btn = boxList.getByText("Create Box")
    fireEvent.click(btn)

    const removeBtn = boxList.getByText("Remove Box!")
    fireEvent.click(removeBtn)
    expect(removeBtn).not.toBeInTheDocument()
})