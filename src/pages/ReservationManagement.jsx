import React, { useState } from 'react';

const initialReservations = [
  {
    id: 1,
    guestName: 'Ravi Kumar',
    phone: '9876543210',
    email: 'ravi@example.com',
    address: '123 Main St, City',
    date: '2025-06-25',
    time: '19:00',
    partySize: 4,
    status: 'Confirmed',
    vip: true,
    blocked: false,
    notes: 'Prefers window seat',
  },
  {
    id: 2,
    guestName: 'Sita Reddy',
    phone: '9123456780',
    email: 'sita@example.com',
    address: '456 Oak Ave, City',
    date: '2025-06-26',
    time: '20:30',
    partySize: 2,
    status: 'Pending',
    vip: false,
    blocked: false,
    notes: '',
  },
];

const statusColors = {
  Confirmed: 'success',
  Pending: 'warning',
  Cancelled: 'danger',
};

const ReservationManagement = () => {
  const [reservations, setReservations] = useState(initialReservations);

  const toggleVIP = (id) => {
    setReservations((prev) =>
      prev.map((res) =>
        res.id === id ? { ...res, vip: !res.vip } : res
      )
    );
  };

  const toggleBlocked = (id) => {
    setReservations((prev) =>
      prev.map((res) =>
        res.id === id ? { ...res, blocked: !res.blocked } : res
      )
    );
  };

  return (
    <div className="container my-4">
      <h1>Reservation Management</h1>
      <p>Easily enter or modify reservations while viewing guest histories.</p>
      <table className="table table-striped mt-3">
        <thead>
          <tr>
            <th>Guest Name</th>
            <th>Phone</th>
            <th>Email</th>
            <th>Address</th>
            <th>Date</th>
            <th>Time</th>
            <th>Party Size</th>
            <th>VIP</th>
            <th>Blocked</th>
            <th>Notes</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {reservations.map((res) => (
            <tr key={res.id} className={res.blocked ? 'table-danger' : ''}>
              <td>{res.guestName}</td>
              <td>{res.phone}</td>
              <td>{res.email}</td>
              <td>{res.address}</td>
              <td>{res.date}</td>
              <td>{res.time}</td>
              <td>{res.partySize}</td>
              <td>
                <input
                  type="checkbox"
                  checked={res.vip}
                  onChange={() => toggleVIP(res.id)}
                />
              </td>
              <td>
                <input
                  type="checkbox"
                  checked={res.blocked}
                  onChange={() => toggleBlocked(res.id)}
                />
              </td>
              <td>{res.notes}</td>
              <td>
                <span className={`badge bg-${statusColors[res.status] || 'secondary'}`}>
                  {res.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <p>Reduce no-shows with enhanced customer tracking. Take reservations from your website or Open Table 24 hours.</p>
    </div>
  );
};

export default ReservationManagement;
