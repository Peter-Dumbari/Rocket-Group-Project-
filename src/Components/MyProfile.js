import React from 'react';
import './Profile.css';
import RocketProfile from './RocketProfile';
import Missionprofile from './Missions/MissionProfile/Missionprofile';

const Myprofile = () => (
  <div className="profile-container">
    <section className="mission-container">
      <Missionprofile />
    </section>
    <section className="rocket-Container">
      <h1>My Rockets</h1>
      <RocketProfile />
    </section>
  </div>
);

export default Myprofile;
