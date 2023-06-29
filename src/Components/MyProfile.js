import React from 'react';
import Missionprofile from './Missions/MissionProfile/Missionprofile';

function Myprofile() {
  return (
    <div className="profile-container">
      <div className="missions-profile">
        <Missionprofile />
      </div>
      <div className="rockets-profile">
        <h2>My Rockets</h2>
      </div>
    </div>
  );
}

export default Myprofile;
