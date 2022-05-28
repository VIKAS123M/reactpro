import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders app title element', () => {
  render(<App />);
  const titleElement = screen.getByText(/Find My Movies/i);
  expect(titleElement).toBeInTheDocument();
});
