import React from 'react';

const TableGrid = ({ tables, reservations }) => {
  const getStatusVariant = (status) => {
    switch (status.toLowerCase()) {
      case 'vacant':
        return 'success';
      case 'reserved':
        return 'warning';
      case 'vip':
        return 'danger';
      case 'merged':
        return 'info';
      default:
        return 'secondary';
    }
  };

  // Helper to get reservations for a table
  const getReservationsForTable = (tableId) => {
    return reservations.filter((res) => res.table === tableId);
  };

  return (
    <div className="container my-4">
      <div className="row g-3">
        {tables.map((table, index) => {
          const tableReservations = getReservationsForTable(table.id);
          return (
            <div key={table.id} className="col-6 col-md-3">
              <div
                className="card h-100 shadow-sm"
                style={{
                  backgroundColor: index % 2 === 0 ? '#fff8f0' : '#f9f9f9',
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                  cursor: 'pointer',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'scale(1.05)';
                  e.currentTarget.style.boxShadow = '0 8px 16px rgba(183, 65, 14, 0.4)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'scale(1)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                <div className="card-body text-center">
                  <h5 className="card-title">{table.name}</h5>
                  <span className={`badge bg-${getStatusVariant(table.status)}`}>
                    {table.status.toUpperCase()}
                  </span>
                  {tableReservations.length > 0 ? (
                    <div className="mt-3 text-start">
                      <h6>Reservations:</h6>
                      {tableReservations.map((res) => (
                        <div key={res.id} className="mb-2 p-2 border rounded">
                          <div><strong>Guest:</strong> {res.guestName}</div>
                          <div><strong>Date:</strong> {res.date}</div>
                          <div><strong>Time:</strong> {res.time}</div>
                          <div><strong>Party Size:</strong> {res.partySize}</div>
                          <div><strong>AC/Non-AC:</strong> {res.ac}</div>
                          <div><strong>Phone Number:</strong> {res.phoneNumber}</div>
                          <div><strong>Status:</strong> {res.status}</div>
                          <div><strong>Orders:</strong>
                            <ul>
                              {res.orders && res.orders.map((order, idx) => (
                                <li key={idx}>{order.quantity} x {order.item}</li>
                              ))}
                            </ul>
                          </div>
                          <div><strong>Waiting Period:</strong> {res.waitingPeriod}</div>
                          <div><strong>Bill Details:</strong> ₹{res.billDetails}</div>
                          <div><strong>Payment Mode:</strong> {res.paymentMode}</div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="mt-3 text-muted">No reservations</div>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TableGrid;
