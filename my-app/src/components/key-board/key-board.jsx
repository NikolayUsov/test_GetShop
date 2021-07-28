import React from 'react';
import cn from 'classnames';
import ButtonNumber from '../button-number/button-number';
import styles from './key-board.module.scss';

const Buttons = ['BackSpace', ...new Array(10).fill('').map((elem, index) => index)];

function KeyBoard() {
  return (
    <ul className={styles.wrapper}>
      { Buttons.map((elem) => {
        const className = cn(styles.button,
          {
            [styles.backspace]: elem === 'BackSpace',
            [styles.zero]: elem === 0,
          });
        return (

          <li key={elem} className={className}><ButtonNumber value={elem} /></li>

        );
      })}

    </ul>
  );
}

export default KeyBoard;
