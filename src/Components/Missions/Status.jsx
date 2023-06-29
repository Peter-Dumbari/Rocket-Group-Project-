import React from 'react';
import PropTypes from 'prop-types';

function Status({ join }) {
  return (
    <div className={join ? 'member' : 'not_a_member'}>
      {join ? 'Active Member' : 'NOT A MEMBER'}
    </div>
  );
}

export default Status;

Status.propTypes = {
  join: PropTypes.bool.isRequired,
};
