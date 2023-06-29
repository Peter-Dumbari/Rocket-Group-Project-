import React from 'react';
import './Missionprofile.css';
import { useSelector } from 'react-redux';

function Missionprofile() {
  const joinedMission = useSelector((state) => state.mission.joinedMission);

  return (
    <div className="join_mission_container">
      <div className="mission_profile">
        <h2>My Missions</h2>
        <div className="joined-missions">
          {joinedMission.length === 0 ? (
            <p>No missions joined.</p>
          ) : (
            <ul>
              {joinedMission.map((mission) => (
                <li key={mission.mission_id}>{mission.mission_name}</li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}

export default Missionprofile;
