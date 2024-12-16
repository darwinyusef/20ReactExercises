import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { FirstComponent } from '../components/FirstComponent';

describe('FirstComponent', () => {
  it('renders the title and info correctly', () => {
    render(<FirstComponent info="Pepito Clavo un Clavito" />);
    expect(screen.getByText('FirstComponent')).toBeInTheDocument();
    expect(screen.getByText('Pepito Clavo un Clavito')).toBeInTheDocument();
  });
});