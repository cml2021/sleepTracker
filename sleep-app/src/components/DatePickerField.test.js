import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router} from 'react-router-dom';
import DatePickerField from './DatePickerField';

test('renders date picker field', () => {
    render(
        <Router>
            <DatePickerField label={"fieldLabel"}/>
        </Router>
    )
})