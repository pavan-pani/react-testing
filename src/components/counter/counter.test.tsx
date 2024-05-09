import Counter from "./counter";
import user from '@testing-library/user-event'
import { render, screen } from "@testing-library/react";

describe("Counter", () => {
    test('rendered succesfully', () => {
        render(<Counter />)
        const countEle = screen.getByRole('heading')
        expect(countEle).toBeInTheDocument()

        const incBtn = screen.getByRole('button', {
            name: 'Increment'
        })
        expect(incBtn).toBeInTheDocument()

    })

    test('render a count 0', () => {
        render(<Counter />)
        const countEle = screen.getByRole('heading')
        expect(countEle).toHaveTextContent('0')
    })

    test('render count of 1 after clicking button', async () => {
        user.setup()
        render(<Counter />)
        const incBtn = screen.getByRole('button', {
            name: 'Increment'
        })
        await user.click(incBtn)
        const countElement = screen.getByRole('heading')
        expect(countElement).toHaveTextContent('1')
    })

    test('render count of 10 after clicking button', async ()=>{
        user.setup()
        render(<Counter />)
        const amountInput = screen.getByRole('spinbutton')
        await user.type(amountInput, '10')
        expect(amountInput).toHaveValue(10)

        const incBtn = screen.getByRole('button', {
            name: 'Set'
        })
        await user.click(incBtn)
        const countElement = screen.getByRole('heading')
        expect(countElement).toHaveTextContent('10')
    })

    test('elements are focused in the right order', async ()=>{
        user.setup()
        render(<Counter />)

        const amountInput = screen.getByRole('spinbutton')
        const setInput = screen.getByRole('button', {name:'Set'})
        const IncInput = screen.getByRole('button', {name:'Increment'})
        await user.tab()
        expect(IncInput).toHaveFocus()
        await user.tab()
        expect(amountInput).toHaveFocus()
        await user.tab()
        expect(setInput).toHaveFocus()
    })
})