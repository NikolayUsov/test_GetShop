import React, { useState, useCallback  } from 'react';
import cn from 'classnames';
import styles from './order-form.module.scss';
import KeyBoard from '../key-board/key-board';
import { KeysType } from '../../utils/const';
import { createInputMask } from '../../utils/utils';
import { checkNumber } from '../../api/api';


const pattern = '+7(___)___-__-__';
const getPhoneNumber = createInputMask(pattern);

const InitialInput = {
  inputNumbers: '',
  value: '',
  showError: false,
};

const FormStatus = {
  NORMAL: 'normal',
  SUCCESS_SUBMIT: 'submit',
  INVALID: 'INVALID',
};

function OrderForm() {
  const [input, setValue] = useState(InitialInput);
  const [checkBoxState, setCheckBox] = useState(false);
  const [formStatus, setFormStatus] = useState(FormStatus.NORMAL);

  const submitDisable = !checkBoxState || input.inputNumbers.length !== 10;

  const handleFormSubmit = (evt) => {
    evt.preventDefault();
    checkNumber(input.value)
      .then((res) => {
        if (res.valid) {
          setFormStatus(FormStatus.SUCCESS_SUBMIT);
        } else {
          setFormStatus(FormStatus.INVALID);
        }
      })
      .catch((err) => {
        throw new Error(err);
      });
  };

  const handleButtonNumberClick = useCallback((number) => {
    if (formStatus !== FormStatus.NORMAL) {
      setFormStatus(FormStatus.NORMAL);
    }
    
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
  }, [])

  const handleConfirmChange = () => {
    setCheckBox(!checkBoxState);
  };

  return (
    <form
      onSubmit={handleFormSubmit}
      action="#"
      method="post"
      className={styles.form}
      data-testid="order-form"
    >
      {formStatus === FormStatus.SUCCESS_SUBMIT
        ? (
          <div>
            <h2 className={styles.form_success_title}>???????????? ??????????????</h2>
            <p className={styles.form_success_description}>
              ?????????????? ?????????????? ?????? ??????????.
              <br />
              ?????????? ?? ???????? ???????????????? ?????? ????????????????.
            </p>
          </div>
        )
        : (
          <>
            <h2 className={styles.header}>?????????????? ?????? ?????????? ???????????????????? ????????????????</h2>
            <div className={styles.input_wrapper}>
              <label htmlFor="phone" className="visually-hidden">
                Phone number
              </label>
              <input
                data-testid="phone-input"
                id="phone"
                type="tel"
                value={input.value}
                placeholder="+7(___)___-__-__"
                className={cn([styles.phone_input],
                  { [styles.phone_input__error]: formStatus === FormStatus.INVALID })}
              />
            </div>
            <p className={styles.description}>
              ?? ?? ???????? ???????????????? ?????? ???????????????? ?????? ???????????????????? ????????????????????????
            </p>
            <div className={styles.keyboard_wrapper}>
              <KeyBoard handleButtonNumberClick={handleButtonNumberClick} />
            </div>

            <div className={styles.confirm_wrapper}>
              {formStatus === FormStatus.INVALID
                ? (
                  <p className={styles.form_confirm__error}>?????????????? ???????????? ??????????</p>
                )
                : (
                  <>
                    <input
                      onChange={handleConfirmChange}
                      checked={checkBoxState}
                      type="checkbox"
                      id="confirm"
                      data-testid="confirm"
                      className={styles.confirm_checkbox}
                    />
                    <label htmlFor="confirm" className={styles.confirm_label}>???????????????? ???? ?????????????????? ???????????????????????? ????????????</label>
                  </>

                )}
            </div>
            <button
              type="submit"
              data-testid="submit-button"
              className={styles.button_submit}
              disabled={submitDisable}
            >
              ?????????????????????? ??????????
            </button>
          </>
        )}

    </form>
  );
}

export default OrderForm;
