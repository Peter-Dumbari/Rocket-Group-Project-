import React from 'react';
import PropTypes from 'prop-types';

function Buttons({ toggle, onclick }) {
  return (
    <button
      onClick={onclick}
      type="button"
      className={toggle ? 'succes_btn' : 'danger_btn'}
    >
      {toggle ? 'Leave Mission' : 'Join Mission'}
    </button>
  );
}

export default Buttons;

Buttons.propTypes = {
  toggle: PropTypes.bool.isRequired,
  onclick: PropTypes.func.isRequired,
};
