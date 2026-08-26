import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the portfolio navigation', () => {
  render(<App />);
  expect(screen.getByRole('link', { name: 'About' })).toBeInTheDocument();
  expect(screen.getByRole('link', { name: 'Resume' })).toBeInTheDocument();
  expect(screen.getByRole('link', { name: 'Portfolio' })).toBeInTheDocument();
  expect(screen.getByRole('link', { name: 'Contact' })).toBeInTheDocument();
});
