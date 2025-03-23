import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from '../src/App';

describe('App', () => {
	test('renders App component', () => {
		render(<App />);

		expect(screen.getByRole('header')).toHaveTextContent('Hello, World!');
	});
});
