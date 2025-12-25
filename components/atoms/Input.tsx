// components/atoms/Input.tsx
import React from 'react';

interface InputProps {
  value: string | number;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
}

const Input: React.FC<InputProps> = ({ value, onChange, placeholder }) => {
  return (
    <input
      type="number"
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className="border px-3 py-2 rounded focus:outline-blue-500"
    />
  );
};

export default Input;
