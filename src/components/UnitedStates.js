import React from 'react';

function UnitedStates(props) {
  return (
    <div>
      <h1>United States</h1>
      <ul>
        {props.states
          .map((s, index) => (
            <li key={index}>
              <strong>name:</strong> {s.name} - {s.code}
            </li>
          ))
          .sort()
          .reverse()}
      </ul>
    </div>
  );
}

export default UnitedStates;
