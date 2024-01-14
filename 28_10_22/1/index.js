import React from 'react';
import ReactDOM from 'react-dom';
import Bibliography from './Bibliography';

const works = [
  {
    title: 'Hamlet',
    author: 'William Shakespeare',
    year: 1603,
    genre: 'Tragedy'
  },
  {
    title: 'Romeo and Juliet',
    author: 'William Shakespeare',
    year: 1597,
    genre: 'Tragedy'
  },
  {
    title: 'Macbeth',
    author: 'William Shakespeare',
    year: 1606,
    genre: 'Tragedy'
  },
  {
    title: 'Othello',
    author: 'William Shakespeare',
    year: 1603,
    genre: 'Tragedy'
  },
  {
    title: 'Julius Caesar',
    author: 'William Shakespeare',
    year: 1599,
    genre: 'Tragedy'
  },
  {
    title: 'King Lear',
    author: 'William Shakespeare',
    year: 1606,
    genre: 'Tragedy'
  },
  {
    title: 'The Tempest',
    author: 'William Shakespeare',
    year: 1611,
    genre: 'Comedy'
  }
];

ReactDOM.render(
  <Bibliography works={works} />,
  document.getElementById('root')
);

