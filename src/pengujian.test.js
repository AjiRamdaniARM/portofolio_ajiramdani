import { render, screen } from "@testing-library/react";
import App from './App';

test('rendes learn react link', () => {
    render(<App />);
    const linkelement = screen.getByText(/learn react/i);
    expect(linkelement).toBeInTheDocument();
});