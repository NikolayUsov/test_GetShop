import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import PropTypes from 'prop-types';
import styles from './button-number.module.scss';

function ButtonNumber({ value }) {
  return (
    <button type="button" className={styles.button}>{value === 'BackSpace' ? 'Стереть' : value}</button>
  );
}
ButtonNumber.propTypes = {
  value: PropTypes.number.isRequired,
};

export default ButtonNumber;
