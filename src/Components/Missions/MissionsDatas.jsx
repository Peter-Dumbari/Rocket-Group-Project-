import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import Buttons from './Buttons';
import Status from './Status';
import { joinMission, leaveMission } from '../../redux/Mission/missionSlice';

function MissionsDatas({ data }) {
  const dispatch = useDispatch();
  const joinedMission = useSelector((state) => state.mission.joinedMission);
  const { description, mission_name: mission, mission_id: id } = data;

  const handleJoinMission = (missionId) => {
    dispatch(joinMission(missionId));
  };

  const handleLeaveMission = (missionId) => {
    dispatch(leaveMission(missionId));
  };

  const joined = (missionId) => joinedMission.some((data) => data.mission_id === missionId);

  return (
    <tr>
      <td>{mission}</td>
      <td>{description}</td>
      <td>
        <Status join={joined(id)} />
      </td>
      <td>
        <Buttons
          toggle={joined(id)}
          onclick={() => (joined(id) ? handleLeaveMission(id) : handleJoinMission(id))}
        />
      </td>
    </tr>
  );
}

export default MissionsDatas;

MissionsDatas.propTypes = {
  data: PropTypes.shape([]).isRequired,
};
