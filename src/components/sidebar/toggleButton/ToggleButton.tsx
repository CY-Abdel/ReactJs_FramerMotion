import React from 'react';

const ToggleButton: React.FC<{ setOpen: React.Dispatch<React.SetStateAction<boolean>> }> = ({ setOpen }) => {
  return (
    <button onClick={() => setOpen((prev: boolean) => !prev)}>
      <svg width="23" height="23" viewBox='0 0 23 23'>
        <path strokeWidth="3" stroke='black' strokeLinecap='round' />
        <path strokeWidth="3" stroke='black' strokeLinecap='round' />
        <path strokeWidth="3" stroke='black' strokeLinecap='round' />
      </svg>
    </button>
  );
}

export default ToggleButton;
