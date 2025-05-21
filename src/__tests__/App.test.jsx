import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from '../App';

describe('App Routing', () => {
  test('renders Navbar and Reservation page by default', () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <App />
      </MemoryRouter>
    );
    expect(screen.getByText(/Potta Palga/i)).toBeInTheDocument();
    expect(screen.getByText(/Reservation Page/i)).toBeInTheDocument();
  });

  test('navigates to Tables page', () => {
    render(
      <MemoryRouter initialEntries={['/tables']}>
        <App />
      </MemoryRouter>
    );
    expect(screen.getByText(/Table Management/i)).toBeInTheDocument();
  });

  test('navigates to Guests page', () => {
    render(
      <MemoryRouter initialEntries={['/guests']}>
        <App />
      </MemoryRouter>
    );
    expect(screen.getByText(/Guest Management/i)).toBeInTheDocument();
  });

  test('navigates to Admin Dashboard page', () => {
    render(
      <MemoryRouter initialEntries={['/admin']}>
        <App />
      </MemoryRouter>
    );
    expect(screen.getByText(/Admin Dashboard/i)).toBeInTheDocument();
  });
});
