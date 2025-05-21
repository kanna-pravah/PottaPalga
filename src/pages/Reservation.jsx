import React from 'react';
import ReservationForm from '../components/ReservationForm';

const Reservation = () => {
  const handleReservationSubmit = (data) => {
    console.log('Reservation submitted:', data);
    // You can add further logic here or show a toast notification
  };

  return (
    <div className="container my-4">
      <h1 className="mb-4 text-center">Reservation</h1>
      <ReservationForm onSubmit={handleReservationSubmit} />
    </div>
  );
};

export default Reservation;
