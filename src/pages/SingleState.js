import React from 'react';
import StateInfo from '../components/StateInfo';

function SingleState(props) {
  console.log(props);
  const singleState = props.states.filter(
    (state) => state.id === props.match.params.stateId
  )[0];
  return (
    <div>
      <h1>State Name</h1>
      <p>State Desc</p>
      <StateInfo thisState={singleState} />
    </div>
  );
}

// const CampsiteWithId = ({ match }) => {
//   return (
//     <CampsiteInfo
//       campsite={
//         this.state.campsites.filter(
//           (campsite) => campsite.id === +match.params.campsiteId
//         )[0]
//       }
//       comments={this.state.comments.filter(
//         (comment) => comment.campsiteId === +match.params.campsiteId
//       )}
//     />
//   );
// };

export default SingleState;
