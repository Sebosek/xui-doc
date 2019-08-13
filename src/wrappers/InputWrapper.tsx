import React, { FunctionComponent, useRef, useEffect } from 'react';
import { state } from '@xui/components/dist/types/components/shared/state';

interface InputProps {
  placeholder?: string;
  type?: string;
  name?: string;
  disabled?: boolean;
  value?: string | number;
  state?: state;
  onChange?: (input: HTMLXuiInputElement) => void;
}

const InputWrapper: FunctionComponent<InputProps> = ({
  placeholder,
  type = 'text',
  name,
  disabled = false,
  value,
  state = 'normal',
  onChange,
}) => {
  const inputRef = useRef<HTMLXuiInputElement>(null);

  const handleChange = () => {
    if (inputRef.current === null || !onChange) return;

    onChange(inputRef.current);
  };

  useEffect(() => {
    if (inputRef.current === null) return;
    
    const xui = inputRef.current;
    xui.addEventListener('change', handleChange);

    return () => {
      xui.removeEventListener('change', handleChange);
    };
  });

  return (
    <xui-input
      placeholder={placeholder}
      type={type}
      name={name}
      disabled={disabled}
      value={value}
      state={state}
      ref={inputRef}
    ></xui-input>
  );
};

export default InputWrapper;