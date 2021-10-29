import React from 'react';
import s from './Input.module.css';

type InputType = {
  type: string
  placeholder: string
  value: string
  setValue: (value: string) => void
};

export const Input: React.FC<InputType> = ({ type, placeholder, value, setValue }) => {
  return (
    <input onChange={e => setValue(e.target.value)}
           autoComplete='off'
           value={value}
           className={s.input}
           type={type}
           placeholder={placeholder}
    />
  );
};