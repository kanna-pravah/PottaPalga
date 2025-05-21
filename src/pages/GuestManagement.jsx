import React, { useState } from 'react';
import GuestCard from '../components/GuestCard';

const initialGuests = [
  {
    id: 1,
    name: 'Ravi Kumar',
    phone: '9876543210',
    email: 'ravi@example.com',
    vip: true,
    preferences: 'Window seat, Vegan meal',
    specialOccasions: ['Birthday: 2025-07-15'],
    marketingOptIn: true,
  },
  {
    id: 2,
    name: 'Sita Reddy',
    phone: '9123456780',
    email: 'sita@example.com',
    vip: false,
    preferences: '',
    specialOccasions: [],
    marketingOptIn: false,
  },
];

const GuestManagement = () => {
  const [guests, setGuests] = useState(initialGuests);

  const toggleVIP = (id) => {
    setGuests((prev) =>
      prev.map((guest) =>
        guest.id === id ? { ...guest, vip: !guest.vip } : guest
      )
    );
  };

  const toggleMarketing = (id) => {
    setGuests((prev) =>
      prev.map((guest) =>
        guest.id === id ? { ...guest, marketingOptIn: !guest.marketingOptIn } : guest
      )
    );
  };

  return (
    <div className="container my-4">
      <h1>Guest Management</h1>
      <p>Identify regulars and VIPs, track preferences and special occasions, and manage marketing opt-ins.</p>
      <div className="d-flex flex-wrap justify-content-start">
        {guests.map((guest) => (
          <GuestCard
            key={guest.id}
            guest={guest}
            toggleVIP={toggleVIP}
            toggleMarketing={toggleMarketing}
          />
        ))}
      </div>
    </div>
  );
};

export default GuestManagement;
