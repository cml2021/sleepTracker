import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from "./Header";

test('renders header with a tab and button', () => {

    const tabProps = [{
        "name": "tabName",
        "path": "tabPath"
    }]

    const buttonProps = {
        "text": "buttonText",
        "path": "buttonPath",
        "active": true
    }

    render(
        <Router>
            <Header tabs={tabProps} button={buttonProps} />
        </Router>
    )

    expect(screen.getByRole('heading')).toHaveTextContent(/sleepTracker/i);
    expect(screen.getByText('tabName')).toBeInTheDocument();
    expect(screen.getByText('buttonText')).toBeInTheDocument();
    expect(screen.getByText('buttonText')).toBeEnabled();
});

test('renders header with two tabs and a button', () => {

    const tabProps = [
        {
            "name": "tab1Name",
            "path": "tab1Path"
        },
        {
            "name": "tab2Name",
            "path": "tab2Path"
        }
    ]

    const buttonProps = {
        "text": "buttonText",
        "path": "buttonPath",
        "active": true
    }

    render(
        <Router>
            <Header tabs={tabProps} button={buttonProps} />
        </Router>
    )

    expect(screen.getByRole('heading')).toHaveTextContent(/sleepTracker/i);
    expect(screen.getByText('tab1Name')).toBeInTheDocument();
    expect(screen.getByText('tab2Name')).toBeInTheDocument();
    expect(screen.getByText('buttonText')).toBeInTheDocument();
    expect(screen.getByText('buttonText')).toBeEnabled();
});

test('renders header with no tabs and a button', () => {

    const buttonProps = {
        "text": "buttonText",
        "path": "buttonPath",
        "active": true
    }

    render(
        <Router>
            <Header button={buttonProps} />
        </Router>
    )

    expect(screen.getByRole('heading')).toHaveTextContent(/sleepTracker/i);
    expect(screen.getByText('buttonText')).toBeInTheDocument();
    expect(screen.getByText('buttonText')).toBeEnabled();
});

test ('renders header with 1 tab and no button', () => {
    
    const tabProps = [{
        "name": "tabName",
        "path": "tabPath"
    }]

    render(
        <Router>
            <Header tabs={tabProps} />
        </Router>
    )

    expect(screen.getByRole('heading')).toHaveTextContent(/sleepTracker/i);
    expect(screen.getByText('tabName')).toBeInTheDocument();
});

test ('renders header with no tabs or button', () => {
    
    render(
        <Router>
            <Header />
        </Router>
    )

    expect(screen.getByRole('heading')).toHaveTextContent(/sleepTracker/i); 
})