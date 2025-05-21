import React from 'react';
import StatsChart from '../components/StatsChart';

const AdminDashboard = () => {
  return (
    <div className="container my-4">
      <h1 className="mb-4 text-center">Admin Dashboard</h1>

      <div className="row mb-4">
        <div className="col-md-4 mb-3">
          <div className="card shadow-sm p-3 text-center">
            <h5>Total Reservations</h5>
            <p className="display-6">120</p>
          </div>
        </div>
        <div className="col-md-4 mb-3">
          <div className="card shadow-sm p-3 text-center">
            <h5>VIP Guests</h5>
            <p className="display-6">25</p>
          </div>
        </div>
        <div className="col-md-4 mb-3">
          <div className="card shadow-sm p-3 text-center">
            <h5>Tables Occupied</h5>
            <p className="display-6">18</p>
          </div>
        </div>
      </div>

      <StatsChart />

      <h2 className="mt-5 mb-3">Reservation Report</h2>
      <div className="table-responsive">
        <table className="table table-striped table-hover shadow-sm">
          <thead className="table-dark">
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Date</th>
              <th>Time</th>
              <th>Guests</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Anjali Reddy</td>
              <td>2024-06-15</td>
              <td>19:00</td>
              <td>4</td>
              <td><span className="badge bg-success">Confirmed</span></td>
            </tr>
            <tr>
              <td>2</td>
              <td>Ravi Kumar</td>
              <td>2024-06-16</td>
              <td>20:30</td>
              <td>2</td>
              <td><span className="badge bg-warning text-dark">Pending</span></td>
            </tr>
            <tr>
              <td>3</td>
              <td>Sita Devi</td>
              <td>2024-06-17</td>
              <td>18:45</td>
              <td>3</td>
              <td><span className="badge bg-danger">Cancelled</span></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminDashboard;
