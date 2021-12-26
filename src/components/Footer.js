import React from 'react';

function Footer({ states }) {
  const mStates = states.filter(
    (ms) => ms.name.charAt(0).toLowerCase() === 'm'
  );
  // console.log(mStates);
  return (
    <div>
      <h2>My Footer</h2>
      <h3>States that begin with "M"</h3>
      {mStates.map((ms) => ms.name + ', ')}
    </div>
  );
}

export default Footer;
