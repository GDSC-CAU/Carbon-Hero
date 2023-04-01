import '@testing-library/jest-dom'
import {render} from '@testing-library/react'
import test from "node:test";
import Container from "./Container";

test('loads and displays greeting', async () => {
    // ARRANGE
    render(<Container />)

    // ACT
    // await userEvent.click(screen.getByText('Load Greeting'))
    // await screen.findByRole('heading')

    // ASSERT
    // expect(screen.getByRole('heading')).toHaveTextContent('hello there')
    // expect(screen.getByRole('button')).toBeDisabled()
})
