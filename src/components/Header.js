import React from 'react';
import Navbar from './Navbar';

function Header({ states }) {
  const numStatesWithI = states.reduce((a, c) => {
    return a + c.name.length;
  }, 0);
  console.log(numStatesWithI);

  return (
    <>
      <Navbar />
      <p>
        How many letters are in all of the US states combined? {numStatesWithI}
      </p>
    </>
  );
}

export default Header;
