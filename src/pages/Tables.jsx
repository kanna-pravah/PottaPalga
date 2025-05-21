import React from 'react';
import TableGrid from '../components/TableGrid';
import tablesData from '../data/tables.json';
import reservationsData from '../data/reservations.json';

const Tables = () => {
  return (
    <div className="container my-4">
      <h1 className="mb-4 text-center">Table Management</h1>
      <TableGrid tables={tablesData} reservations={reservationsData} />
    </div>
  );
};

export default Tables;
