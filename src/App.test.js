import { render, screen } from '@testing-library/react';
import App from './App';

test('renders correct header', () => {
  render(<App />);
  const header = document.querySelector('h1');
  expect(header).toHaveTextContent('Multiplication');
});
