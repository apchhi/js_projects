import React from 'react';
import './ClubSquad.css';

const ClubSquad = (props) => {
  const squadList = props.squad.map((player, index) =>
    <tr key={index}>
      <td>{player.name}</td>
      <td>{player.position}</td>
      <td>{player.height}</td>
      <td>{player.weight}</td>
    </tr>
  );

  return (
    <div className="club-squad">
      <h2>Club Squad</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Position</th>
            <th>Height</th>
            <th>Weight</th>
          </tr>
        </thead>
        <tbody>
          {squadList}
        </tbody>
      </table>
    </div>
  )
}

export default ClubSquad;

