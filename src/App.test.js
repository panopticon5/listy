import { render, screen } from '@testing-library/react';
import ListService from './list-view/ListService';
import App from './App';

jest.mock('./list-view/ListService');

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/Listy/i);
  expect(linkElement).toBeInTheDocument();
});
