import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import ReservationForm from '../ReservationForm';

describe('ReservationForm', () => {
  test('renders form inputs and submit button', () => {
    render(<ReservationForm />);
    expect(screen.getByLabelText(/Name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Email/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Phone/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Date/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Time/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Guests/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Reserve Table/i })).toBeInTheDocument();
  });

  test('shows validation errors on empty submit', () => {
    render(<ReservationForm />);
    fireEvent.click(screen.getByRole('button', { name: /Reserve Table/i }));
    expect(screen.getByText(/Name is required/i)).toBeInTheDocument();
    expect(screen.getByText(/Email is required/i)).toBeInTheDocument();
    expect(screen.getByText(/Phone is required/i)).toBeInTheDocument();
    expect(screen.getByText(/Date is required/i)).toBeInTheDocument();
    expect(screen.getByText(/Time is required/i)).toBeInTheDocument();
    expect(screen.getByText(/Number of guests is required/i)).toBeInTheDocument();
  });

  test('submits form with valid data', () => {
    render(<ReservationForm />);
    fireEvent.change(screen.getByLabelText(/Name/i), { target: { value: 'John Doe' } });
    fireEvent.change(screen.getByLabelText(/Email/i), { target: { value: 'john@example.com' } });
    fireEvent.change(screen.getByLabelText(/Phone/i), { target: { value: '1234567890' } });
    fireEvent.change(screen.getByLabelText(/Date/i), { target: { value: '2024-07-01' } });
    fireEvent.change(screen.getByLabelText(/Time/i), { target: { value: '19:00' } });
    fireEvent.change(screen.getByLabelText(/Guests/i), { target: { value: '4' } });

    fireEvent.click(screen.getByRole('button', { name: /Reserve Table/i }));

    expect(screen.queryByText(/is required/i)).not.toBeInTheDocument();
    expect(screen.getByText(/Reservation successful!/i)).toBeInTheDocument();
  });
});
