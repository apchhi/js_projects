import React from 'react';

const Album = ({ data }) => {
  const { title, artist, year, publisher, cover } = data;

  return (
    <div className="album">
      <img src={cover} alt={`${title} cover`} />
      <h1>{title}</h1>
      <p>by {artist}</p>
      <ul>
        <li>Year: {year}</li>
        <li>Publisher: {publisher}</li>
      </ul>
    </div>
  );
};

export default Album;
