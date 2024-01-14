
import React from 'react';
import PersonInfo from './PersonInfo';

function App() {
  const person = {
    name: 'John Doe',
    phone: '123-456-7890',
    email: 'johndoe@example.com',
    city: 'New York',
    experience: '5 years',
    skills: ['JavaScript', 'React', 'Node.js'],
    photo: 'path/to/person/photo.jpg'
  };

  return (
    <div>
      <PersonInfo {...person} />
    </div>
  );
}

export default App;

