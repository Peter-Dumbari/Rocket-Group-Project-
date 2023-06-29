import React from 'react';
import PropTypes from 'prop-types';
import Buttons from './Buttons';
import Status from './Status';

function MissionsDatas({ data }) {
  console.log(data);
  const { description, mission_name: mission } = data;
  return (
    <tr>
      <td>{mission}</td>
      <td>{description}</td>
      <td>
        <Status />
      </td>
      <td>
        <Buttons toggle />
      </td>
    </tr>
  );
}

export default MissionsDatas;

MissionsDatas.propTypes = {
  data: PropTypes.shape([]).isRequired,
};
