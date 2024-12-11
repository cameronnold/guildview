// src/components/Greeting.test.js
import { render, screen } from '@testing-library/react';
import Greeting from './Greeting';

test('displays the correct greeting message', () => {
  render(<Greeting name="John" />);
  const greetingElement = screen.getByText(/Hello, John!/i);
  expect(greetingElement).toBeInTheDocument();
});
