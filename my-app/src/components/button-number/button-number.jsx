import React from 'react';
import PropTypes from 'prop-types';
import styles from './button-number.module.scss';

function ButtonNumber({ value, handleButtonNumberClick }) {
  return (
    <button
      onClick={() => handleButtonNumberClick(value)}
      type="button"
      data-testid={`phone-number-${value}`}
      className={styles.button}
    >
      {value === 'BackSpace' ? 'Стереть' : value}
    </button>
  );
}
ButtonNumber.propTypes = {
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number]).isRequired,
  handleButtonNumberClick: PropTypes.func.isRequired,
};

export default ButtonNumber;
