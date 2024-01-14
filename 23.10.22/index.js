import React from 'react';
import ReactDOM from 'react-dom';
import Album from './Album';

const albumData = {
  title: 'The Wall',
  artist: 'Pink Floyd',
  year: '1979',
  publisher: 'Harvest Records',
  cover: 'https://upload.wikimedia.org/wikipedia/en/thumb/0/03/Pink_Floyd_-_The_Wall.jpg/220px-Pink_Floyd_-_The_Wall.jpg'
};

ReactDOM.render(
  <Album data={albumData} />,
  document.getElementById('root')
);

