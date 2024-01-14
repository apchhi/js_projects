import React from 'react';

function PersonInfo(props) {
  return (
    <div>
      <h3>{props.name}</h3>
      <p>Phone: {props.phone}</p>
      <p>Email: {props.email}</p>
      <p>City: {props.city}</p>
      <p>Experience: {props.experience}</p>
      <p>Skills: {props.skills.join(', ')}</p>
      <img src={props.photo} alt="Person Photo" />
    </div>
  );
}

export default PersonInfo;

