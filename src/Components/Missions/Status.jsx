import React from 'react';
import PropTypes from 'prop-types';

function Status({ join }) {
  return (
    <div className={join ? 'member' : 'not_a_member'}>
      {join ? 'NOT A MEMBER' : 'Active Member'}
    </div>
  );
}

export default Status;

Status.propTypes = {
  join: PropTypes.bool.isRequired,
};
