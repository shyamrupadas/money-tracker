import React from 'react';

export const Footer = ({text}: {text: string}) => {
  return (
    <p style={{ marginTop: '20px' }}>
      {text}
    </p>
  );
};