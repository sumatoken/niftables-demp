import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import Footer from '@ui/footer'

describe('Footer', () => {
    it('should render', () => {
        render(<Footer />)

        const text = screen.getByText('Powered by')

        expect(text).toBeInTheDocument()
    })
})