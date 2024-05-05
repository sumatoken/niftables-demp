import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import Text from '@ui/text'

describe('Text', () => {
    it('should render', () => {
        render(<Text font='MonumentExtendedRegular'>
            test
        </Text>)

        const text = screen.getByText('test')

        expect(text).toBeInTheDocument()
    })
})