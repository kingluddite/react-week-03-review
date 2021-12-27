import React from 'react';

function StateInfo({ thisState }) {
  return (
    <div>
      <p>{thisState.name}</p>
      <p>{thisState.code}</p>
      <p>{thisState.description}</p>
    </div>
  );
}

export default StateInfo;
