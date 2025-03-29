import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from '@/App';

describe('App', () => {
  test('renders App component', t => {
    t.skip('Implement this test');
    // TODO: Implement test.
    render(<App />);

    expect(screen.getByRole('header')).toHaveTextContent('Hello, World!');
  });
});

describe('something truthy and falsy', () => {
  test('something truthy', () => {
    expect(true).toBeTruthy();
  });

  test('something falsy', () => {
    expect(false).toBeFalsy();
  });
});
