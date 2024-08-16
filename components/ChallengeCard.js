import React from 'react';
import './Challengecard.css';

function ChallengeCard({ challenge }) {
  return (
    <div className="challenge-card">
      <img src={challenge.image} alt={challenge.title} />
      <h3>{challenge.title}</h3>
      <p>{challenge.duration}</p>
      <p>{challenge.workouts}</p>
      <button className="join-btn">JOIN</button>
    </div>
  );
}

export default ChallengeCard;
