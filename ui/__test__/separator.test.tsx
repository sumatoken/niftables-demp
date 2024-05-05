import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import Separator from '@ui/separator'

describe('Separator', () => {
    it('should render', () => {
        render(<Separator title='test-title' />)

        const text = screen.getByRole('separator')

        expect(text).toBeInTheDocument()
    })
})