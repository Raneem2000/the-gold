import './Guid.css';

import React from 'react';

function GuidDropdown({ options, onSelect }) {
  return (
    <select onChange={onSelect}>
      {options.map((option, index) => (
        <option key={index} value={option.branch_guid}>
          {option.branch_guid}
        </option>
      ))}
    </select>
  );
}

export default GuidDropdown;

