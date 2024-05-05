import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import Badge from '@ui/badge'

describe('Badge', () => {
    it('should render', () => {
        render(<Badge title='test-title' />)

        const text = screen.getByText('test-title')

        expect(text).toBeInTheDocument()
    })
})