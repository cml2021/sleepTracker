import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import HomePage from './HomePage';

test('renders homepage with header and image', () => {
    render(
        <Router>
            <HomePage />
        </Router>
    );

    expect(screen.getByAltText(/sleeper/i)).toBeInTheDocument();
    expect(screen.getByRole("heading")).toHaveTextContent(/sleepTracker/i);
    expect(screen.getByText("Diary")).toBeInTheDocument();
    expect(screen.getByText('Log sleep')).toBeInTheDocument();
    expect(screen.getByText('Log sleep')).toBeEnabled();
});
