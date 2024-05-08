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

})