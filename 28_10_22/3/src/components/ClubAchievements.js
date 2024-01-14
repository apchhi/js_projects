import React from 'react';
import './ClubAchievements.css';

const ClubAchievements = (props) => {
  const achievementsList = props.achievements.map((achievement, index) =>
    <li key={index}>{achievement}</li>
  );

  return (
    <div className="club-achievements">
      <h2>Club Achievements</h2>
      <ul>
        {achievementsList}
      </ul>
    </div>
  )
}

export default ClubAchievements;

