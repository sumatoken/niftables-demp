import '@testing-library/jest-dom'
import { render, screen, fireEvent, act } from '@testing-library/react'
import Accordion from '@ui/accordion'

describe('Accordion', () => {
    it('should render', () => {
        render(<Accordion title='test-title' description='test-desc' iconId='discord' />)

        const text = screen.getByText('test-title')

        expect(text).toBeInTheDocument()
    })

    it('should open', async () => {
        await act(async () => {
            render(<Accordion title='test-title' description='test-desc' iconId='discord' />)

        })
        const openButton = screen.getByRole('open-accordion')
        const description = screen.getByText('test-desc')
        fireEvent.click(openButton)

        expect(description).toBeInTheDocument()

    })
})