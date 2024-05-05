import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import HorizontalCard from '@ui/horizontal-card'

describe('Horizontal card', () => {
    it('should render', () => {
        render(<HorizontalCard title='test-title' description='test-description' imageSrc='' />)
        const text = screen.getByText('test-title')

        expect(text).toBeInTheDocument()
    })
})