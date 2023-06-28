import React from 'react';
import PropTypes from 'prop-types';

function Buttons({ toggle }) {
  return (
    <button type="button" className={toggle ? 'succes_btn' : 'danger_btn'}>
      {toggle ? 'Join Mission' : 'Leave Mission'}
    </button>
  );
}

export default Buttons;

Buttons.propTypes = {
  toggle: PropTypes.bool.isRequired,
};
