import React, { FunctionComponent, useRef, useEffect, HTMLAttributes } from 'react';
import { state } from '@xui/components/dist/types/components/shared/state';

interface RadioProps {
  name?: string;
  checked?: boolean;
  value?: string | number;
  disabled?: boolean;
  state?: state;
  tabIndex?: number;
  onSelected?: (input: HTMLXuiRadioElement) => void;
}

const RadioWrapper: FunctionComponent<HTMLAttributes<HTMLElement> & RadioProps> = ({
  name,
  checked = false,
  disabled = false,
  value,
  state = 'normal',
  tabIndex = 0,
  onSelected,
  slot,
}) => {
  const radioRef = useRef<HTMLXuiRadioElement>(null);

  const handleChange = () => {
    if (radioRef.current === null || !onSelected) return;

    onSelected(radioRef.current);
  };

  useEffect(() => {
    if (radioRef.current === null) return;
    
    const xui = radioRef.current;
    xui.addEventListener('selected', handleChange);

    return () => {
      xui.removeEventListener('selected', handleChange);
    };
  });

  return (
    <xui-radio
      name={name}
      checked={checked}
      value={value}
      disabled={disabled}
      tabIndex={tabIndex}
      state={state}
      ref={radioRef}
      slot={slot}
    ></xui-radio>
  );
};

export default RadioWrapper;