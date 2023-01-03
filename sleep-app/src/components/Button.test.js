import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router} from 'react-router-dom';
import Button from './Button';

test('renders active button', () => {
    render(
        <Router>
            <Button text={"text"} path={"/path"} active={true}/>
        </Router>
    )

    expect(screen.getByText("text")).toBeInTheDocument;
    expect(screen.getByText("text")).toBeEnabled;
    expect(screen.getByText("text")).toHaveClass("button", {exact: true});
});

test('renders inactive button', () => {
    render(
        <Router>
            <Button text={"text"} path={"/path"} active={false}/>
        </Router>
    );

    expect(screen.getByText("text")).toBeInTheDocument;
    expect(screen.getByText("text")).toBeDisabled;
    expect(screen.getByText("text")).toHaveClass("button disabled", {exact: true})
})

// TODO test clicking on button navigating to path https://www.digitalocean.com/community/tutorials/how-to-test-a-react-app-with-jest-and-react-testing-library