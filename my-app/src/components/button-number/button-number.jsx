import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import PropTypes from 'prop-types';
import styles from './button-number.module.scss';

function ButtonNumber({ value, handleButtonNumberClick }) {
  return (
    <button
      onClick={() => handleButtonNumberClick(value)}
      type="button"
      className={styles.button}
    >
      {value === 'BackSpace' ? 'Стереть' : value}
    </button>
  );
}
ButtonNumber.propTypes = {
  value: PropTypes.string.isRequired,
  handleButtonNumberClick: PropTypes.func.isRequired,
};

export default ButtonNumber;
