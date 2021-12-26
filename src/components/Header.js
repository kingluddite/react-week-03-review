import React from 'react';

function Header(props) {
  const numStatesWithI = props.states.reduce((a, c) => {
    return a + c.name.length;
  }, 0);
  console.log(numStatesWithI);

  return (
    <div>
      <h2>My Header</h2>
      <p>
        How many letters are in all of the US states combined? {numStatesWithI}
      </p>
    </div>
  );
}

export default Header;
