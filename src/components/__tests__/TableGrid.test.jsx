import React from 'react';
import { render, screen } from '@testing-library/react';
import TableGrid from '../TableGrid';
import tablesData from '../../data/tables.json';

describe('TableGrid', () => {
  test('renders all tables with correct status badges', () => {
    render(<TableGrid />);
    tablesData.forEach((table) => {
      expect(screen.getByText(table.name)).toBeInTheDocument();
      expect(screen.getByText(new RegExp(table.status, 'i'))).toBeInTheDocument();
      expect(screen.getByText(new RegExp(`Capacity: ${table.capacity}`, 'i'))).toBeInTheDocument();
    });
  });
});
