import React from 'react';
import { Link } from 'react-router-dom';

function UnitedStates(props) {
  return (
    <div>
      <h1>United States</h1>
      <ul>
        {props.states
          .map((s) => (
            <li key={s.id}>
              <strong>name:</strong>{' '}
              <Link to={`/us-states/${s.id}`}>
                {s.name} - {s.code}
              </Link>
            </li>
          ))
          .sort()
          .reverse()}
      </ul>
    </div>
  );
}

export default UnitedStates;
