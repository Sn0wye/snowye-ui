import { colors } from '@sn0wye-ui/tokens';
import React from 'react';

export const ColorsGrid = () => {
  return Object.entries(colors).map(([key, color]) => (
    <div key={key} style={{ backgroundColor: color, padding: '2rem' }}>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          fontFamily: 'monospace',
          color: '#fff'
        }}
      >
        <strong>${key}</strong>
        <span>{color}</span>
      </div>
    </div>
  ));
};
