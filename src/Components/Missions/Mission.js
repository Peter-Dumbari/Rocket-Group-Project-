import React from 'react';
import { useSelector } from 'react-redux';
import MissionsDatas from './MissionsDatas';
// import './Mission.css';

function Mission() {
  const { mission } = useSelector((state) => state.mission);
  return (
    <div className="mission_container">
      <div className="mission_inner_container">
        <table className="mission_table">
          <thead>
            <tr>
              <th>Mission</th>
              <th>Description</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody className="mission_table">
            {mission
              && mission.map((item) => (
                <MissionsDatas key={item.id} data={item} />
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Mission;
