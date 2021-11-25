import React from 'react';

export const Footer = ({text}: {text: string}) => {

  if (!text) return null;

  return (
    <p style={{ marginTop: '20px' }}>
      {text}
    </p>
  );
};