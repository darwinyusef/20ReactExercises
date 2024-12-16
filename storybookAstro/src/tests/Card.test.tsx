import { render, screen, fireEvent } from '@testing-library/react';
import { Card  } from '../components/card'; // Asegúrate de que la ruta sea correcta
import { describe, it, expect } from 'vitest';
import { vi } from 'vitest';

describe('Card ', () => {
    it('should render title and description correctly', () => {
        const title = 'Test Title';
        const description = 'Test description';

        render(<Card  title={title} description={description} onCapture={vi.fn()} />);
        expect(screen.getByText(title)).toBeInTheDocument();
        expect(screen.getByText(description)).toBeInTheDocument();
    });

    it('should call onCapture when the button is clicked', () => {
        const mockOnCapture = vi.fn();
        render(
            <Card  title="Test Title" description="Test description" onCapture={mockOnCapture} />
        );
        fireEvent.click(screen.getByText('Capturar'));
        expect(mockOnCapture).toHaveBeenCalledTimes(1);
    });
});