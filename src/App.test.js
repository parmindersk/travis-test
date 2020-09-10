import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/count/i);
  expect(linkElement).toBeInTheDocument();
});

test('incorrect', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/count/i);
  expect(linkElement).toBeInTheDocument();
});