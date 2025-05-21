import React from 'react';
import { render, screen } from '@testing-library/react';
import GuestCard from '../GuestCard';

const guest = {
  id: 1,
  name: 'Anjali Reddy',
  birthday: '1990-06-15',
  history: 'Frequent visitor, prefers window seat',
  vip: true,
};

describe('GuestCard', () => {
  test('renders guest details and VIP badge', () => {
    render(<GuestCard guest={guest} />);
    expect(screen.getByText(guest.name)).toBeInTheDocument();
    expect(screen.getByText(/Birthday:/i)).toBeInTheDocument();
    expect(screen.getByText(guest.history)).toBeInTheDocument();
    expect(screen.getByText(/VIP/i)).toBeInTheDocument();
  });
});
