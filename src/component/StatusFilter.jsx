// src/components/StatusFilter.js
import React from 'react';

const StatusFilter = ({ filterStatus, setFilterStatus }) => {
  return (
    <select value={filterStatus} onChange={(e) => setFilterStatus(e.target.value)}>
      <option value="All">All</option>
      <option value="Completed">Completed</option>
      <option value="Not Completed">Not Completed</option>
    </select>
  );
};

export default StatusFilter;
