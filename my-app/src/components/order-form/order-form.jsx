/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import styles from './order-form.module.scss';
import KeyBoard from '../key-board/key-board';
import { KeysType } from '../../utils/const';
import { createInputMask } from '../../utils/utils';

const pattern = '+7(___)___-__-__';
const getPhoneNumber = createInputMask(pattern);

const InitialInput = {
  inputNumbers: '',
  value: '',
  showError: false,
  rule: /^\d{10}$/,
};

function OrderForm() {
  const [input, setValue] = useState(InitialInput);
  const [checkBoxState, setCheckBox] = useState(false);
  const submitDisable = !checkBoxState || input.inputNumbers.length !== 10;
  const handleButtonNumberClick = (number) => {
    if (number === KeysType.BACKSPACE) {
      setValue((prev) => ({
        ...prev,
        inputNumbers: prev.inputNumbers.slice(0, -1),
        value: getPhoneNumber(prev.inputNumbers.slice(0, -1)),
      }));

      return;
    }
    setValue((prev) => ({
      ...prev,
      inputNumbers: (prev.inputNumbers + number).slice(0, 10),
      value: getPhoneNumber(prev.inputNumbers + number),
    }));
  };

  const handleConfirmChange = () => {
    setCheckBox(!checkBoxState);
  };

  return (
    <form action="#" method="post" className={styles.form}>
      <h2 className={styles.header}>Введите ваш номер мобильного телефона</h2>
      <div className={styles.input_wrapper}>
        <label htmlFor="phone" className="visually-hidden">
          Phone number
        </label>
        <input
          id="phone"
          type="tel"
          value={input.value}
          placeholder="+7(___)___-__-__"
          className={styles.phone_input}
        />
      </div>
      <p className={styles.description}>
        и с Вами свяжется наш менеждер для дальнейшей консультации
      </p>
      <div className={styles.keyboard_wrapper}>
        <KeyBoard handleButtonNumberClick={handleButtonNumberClick} />
      </div>
      <div className={styles.confirm_wrapper}>
        <input
          onChange={handleConfirmChange}
          checked={checkBoxState}
          type="checkbox"
          id="confirm"
          className={styles.confirm_checkbox}
        />
        <label htmlFor="confirm" className={styles.confirm_label}>Согласие на обработку персональных данных</label>
      </div>

      <button
        type="submit"
        className={styles.button_submit}
        disabled={submitDisable}
      >
        Подтвердить номер
      </button>

    </form>
  );
}

export default OrderForm;
