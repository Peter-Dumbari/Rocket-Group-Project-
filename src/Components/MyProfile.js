import React from 'react';
import './Profile.css';
import RocketProfile from './RocketProfile';

const Myprofile = () => (
  <div className="profile-container">
    <section className="mission-container">
      <h1>My Missions</h1>
      {/* Mession component should imported here */}
    </section>
    <section className="rocket-Container">
      <h1>My Rockets</h1>
      <RocketProfile />
    </section>
  </div>
);

export default Myprofile;
