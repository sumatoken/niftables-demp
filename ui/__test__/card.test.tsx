import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import Card from '@ui/card'

describe('Card', () => {
    it('should render', () => {
        render(<Card title='test-title' subTitle='test-subtitle' description='test-description' imageSrc='' />)
        const text = screen.getByText('test-title')

        expect(text).toBeInTheDocument()
    })
})