/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';

import styles from './player.module.scss';
import Modal from '../../components/modal/modal';
import OrderForm from '../../components/order-form/order-form';

export default function Player() {
  return (
    <div className={styles.container}>
      <div className={styles.content} />
      <div className={styles.modal}>
        <h2 className={styles.modal__text}>
          ИСПОЛНИТЕ МЕЧТУ ВАШЕГО МАЛЫША!
          <br />
          {' '}
          ПОДАРИТЕ ЕМУ СОБАКУ!
        </h2>
        <div className={styles.modal__qrcode}>
          <img src="picture/modal1-qr-code.png" alt="qr-code" width={126} height={126} />
        </div>
        <p className={styles.modal__description}>
          Сканируйте QR-код или нажмите ОК
        </p>
        <div className={styles.modal__buttonWrapper}>
          <button type="button" className={styles.modal__button}>ОК</button>
        </div>

      </div>

      <Modal isOpen>
        <section className={styles.formModal}>

          <OrderForm />
          <button type="button" className={styles.formModal_close}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M2.34473 1.94067L22.6263 22.2223" stroke="currentColor" strokeWidth="3" />
              <path d="M1.65771 22.2223L21.9393 1.94067" stroke="currentColor" strokeWidth="3" />
            </svg>
          </button>
        </section>
      </Modal>
    </div>
  );
}
