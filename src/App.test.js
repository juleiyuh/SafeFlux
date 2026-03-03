// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders SafeFlux title', () => {
    render(<App />);
    const titleElement = screen.getByText(/SafeFlux/i);
    expect(titleElement).toBeInTheDocument();
});
