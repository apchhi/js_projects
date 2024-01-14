import React from 'react';

const Bibliography = ({ works }) => {
  const worksList = works.map((work, index) => (
    <div key={index} className="work">
      <h2>{work.title}</h2>
      <p>Author: {work.author}</p>
      <p>Year: {work.year}</p>
      <p>Genre: {work.genre}</p>
    </div>
  ));

  return (
    <div className="bibliography">
      <h1>Shakespeare's Works</h1>
      {worksList}
    </div>
  );
};

export default Bibliography;

