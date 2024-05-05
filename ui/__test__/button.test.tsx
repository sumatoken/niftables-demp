import '@testing-library/jest-dom'
import { render, screen, fireEvent } from '@testing-library/react'
import Button from '@ui/button'

describe('Button', () => {
    it('renders default button', () => {
        render(<Button variant='default'>Default</Button>);
        const button = screen.getByRole('button', { name: /default/i });
        expect(button).toBeInTheDocument();
    });

    it('renders children button', () => {
        render(<Button variant="children">Children</Button>);
        const button = screen.getByRole('button', { name: /children/i });
        expect(button).toBeInTheDocument();
    });

    it('renders outline button', () => {
        render(<Button variant="outline">Outline</Button>);
        const button = screen.getByRole('button', { name: /outline/i });
        expect(button).toBeInTheDocument();
    });

    it('handles click events', () => {
        const handleClick = jest.fn();
        render(<Button variant='default' onClick={handleClick}>Click Me</Button>);
        const button = screen.getByRole('button', { name: /click me/i });
        fireEvent.click(button);
        expect(handleClick).toHaveBeenCalledTimes(1);
    });
})