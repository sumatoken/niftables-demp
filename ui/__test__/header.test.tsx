
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import Header from '@ui/header'

describe('Header', () => {
    it('should render', async () => {
        render(<Header />)
        const text = await screen.findAllByText('Creon Pass')

        expect(text.length).toBe(2)
    })
})