import React, { FunctionComponent, useRef, useEffect, HTMLAttributes } from 'react';
import { state } from '@xui/components/dist/types/components/shared/state';

interface CheckboxProps {
  name?: string;
  checked?: boolean;
  intermediate?: boolean;
  value?: string | number;
  disabled?: boolean;
  state?: state;
  tabIndex?: number;
  onChanged?: (input: HTMLXuiCheckboxElement) => void;
}

const CheckboxWrapper: FunctionComponent<CheckboxProps & HTMLAttributes<HTMLElement>> = ({
  name,
  checked = false,
  intermediate = false,
  disabled = false,
  value,
  state = 'normal',
  tabIndex = 0,
  onChanged,
  ...rest
}) => {
  const checboxRef = useRef<HTMLXuiCheckboxElement>(null);

  const handleChange = () => {
    if (checboxRef.current === null || !onChanged) return;

    onChanged(checboxRef.current);
  };

  useEffect(() => {
    if (checboxRef.current === null) return;
    
    const xui = checboxRef.current;
    xui.addEventListener('changed', handleChange);

    return () => {
      xui.removeEventListener('changed', handleChange);
    };
  });

  return (
    <xui-checkbox
      name={name}
      checked={checked}
      intermediate={intermediate}
      value={value}
      disabled={disabled}
      tabIndex={tabIndex}
      state={state}
      ref={checboxRef}
      slot={rest.slot}
    ></xui-checkbox>
  );
};

export default CheckboxWrapper;