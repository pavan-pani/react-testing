import { render, screen } from "@testing-library/react"
import Greet from "./greet"

test("Greet text", ()=>{
    render(<Greet />)
    const textEle = screen.getByText("Hello")
    expect(textEle).toBeInTheDocument()
})

test("having name prop", ()=>{
    render(<Greet name="pavan" />)
    const textEle = screen.getByText("Hello pavan")
    expect(textEle).toBeInTheDocument()
})