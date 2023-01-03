import { render, screen } from '@testing-library/react';
import App from './App';

test('renders homepage', () => {
  render(<App />);
  
  expect(screen.getByAltText(/sleeper/i)).toBeInTheDocument();
  expect(screen.getByRole("heading")).toHaveTextContent(/sleepTracker/i)
});
