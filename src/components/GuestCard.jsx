import React from 'react';

const GuestCard = ({ guest, toggleVIP, toggleMarketing }) => {
  return (
    <div
      className="card shadow-sm p-3 mb-3"
      style={{
        borderRadius: '12px',
        transition: 'transform 0.3s ease, box-shadow 0.3s ease',
        cursor: 'default',
        minWidth: '250px',
        maxWidth: '300px',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'scale(1.03)';
        e.currentTarget.style.boxShadow = '0 8px 16px rgba(42, 157, 143, 0.4)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'scale(1)';
        e.currentTarget.style.boxShadow = 'none';
      }}
    >
      <h5 className="card-title" style={{ color: '#b7410e' }}>{guest.name}</h5>
      <p className="card-text mb-1"><strong>Phone:</strong> {guest.phone}</p>
      <p className="card-text mb-1"><strong>Email:</strong> {guest.email}</p>
      <p className="card-text mb-1"><strong>Preferences:</strong> {guest.preferences || '-'}</p>
      <p className="card-text mb-1"><strong>Special Occasions:</strong> {guest.specialOccasions.length > 0 ? guest.specialOccasions.join(', ') : '-'}</p>
      <div className="d-flex justify-content-between align-items-center mt-2">
        <div>
          <label>
            <input
              type="checkbox"
              checked={guest.vip}
              onChange={() => toggleVIP(guest.id)}
            />{' '}
            VIP
          </label>
        </div>
        <div>
          <label>
            <input
              type="checkbox"
              checked={guest.marketingOptIn}
              onChange={() => toggleMarketing(guest.id)}
            />{' '}
            Marketing Opt-In
          </label>
        </div>
      </div>
    </div>
  );
};

export default GuestCard;
