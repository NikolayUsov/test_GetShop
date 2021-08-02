import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import ButtonNumber from '../button-number/button-number';
import styles from './key-board.module.scss';
import { KeysType } from '../../utils/const';

const Buttons = [KeysType.BACKSPACE, ...new Array(10).fill('').map((elem, index) => index)];

function KeyBoard({ handleButtonNumberClick }) {
  return (
    <ul className={styles.wrapper}>
      { Buttons.map((elem) => {
        const className = cn(styles.button,
          {
            [styles.backspace]: elem === KeysType.BACKSPACE,
            [styles.zero]: elem === 0,
          });
        return (

          <li key={elem} className={className}>
            <ButtonNumber value={elem} handleButtonNumberClick={handleButtonNumberClick} />
          </li>

        );
      })}

    </ul>
  );
}

KeyBoard.propTypes = {
  handleButtonNumberClick: PropTypes.func.isRequired,
};
  export default React.memo(KeyBoard);
