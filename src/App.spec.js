/* eslint-disable testing-library/no-render-in-setup */
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from './App';

describe('Test App', () => {
  beforeEach(() => {
    render(<App />);
  });
  it('should render title "Search for Hits"', () => {
    const h1Tag = screen.getByTestId('titleSearchHit');
    expect(h1Tag).toBeInTheDocument();
  });

  it('should render input field', () => {
    const inputTag = screen.getByTestId('searchField');
    expect(inputTag).toBeInTheDocument();
  });

  it('should render list view no data', () => {
    const olTag = screen.getByTestId('listNoDataSearchHit');
    expect(olTag).toBeInTheDocument();
  });
});