import React from 'react';

export default function Counter (props = {}) {

  const { onCount, toCount = 0 } = props;
  const handleCount = () => onCount ? onCount(toCount) : null;
  const text = toCount < 0 ? toCount : `+${toCount}`;

  return (
    <button className="button" onClick={handleCount}>{text}</button>
  );
}
