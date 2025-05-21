import React from 'react';
import GuestCard from '../components/GuestCard';
import guestsData from '../data/guests.json';

const Guests = () => {
  return (
    <div className="container my-4">
      <h1 className="mb-4 text-center">Guest Management</h1>
      <div className="row">
        {guestsData.map((guest) => (
          <div key={guest.id} className="col-12 col-md-6 col-lg-4">
            <GuestCard guest={guest} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Guests;
