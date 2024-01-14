import React from 'react';
import './ClubInfo.css';

const ClubInfo = (props) => {
  return (
    <div className="club-info">
      <h2>{props.name}</h2>
      <p>City: {props.city}</p>
      <p>Founded: {props.founded}</p>
      <img src={props.logo} alt="Club Logo" />
    </div>
  )
}

export default ClubInfo;

