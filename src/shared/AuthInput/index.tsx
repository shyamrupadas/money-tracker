import React from 'react';
import { TextField } from '@mui/material';

type InputType = {
  type: string
  placeholder: string
  value: string
  setValue: (value: string) => void
};

export const AuthInput: React.FC<InputType> = ({ type, placeholder, value, setValue }) => {
  return (
    <TextField
      onChange={e => setValue(e.target.value)}
      autoComplete='off'
      value={value}
      type={type}
      placeholder={placeholder}
      size='small'
      margin={'dense'}
    />
  );
};