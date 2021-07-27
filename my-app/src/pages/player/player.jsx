import React from 'react'
import styles from './player.module.scss';

export default function Player() {
  return (
    <div className={styles.container}>
      <div className={styles.content}></div>
      <div className={styles.modal}>
        <h2 className={styles.modal__text}>ИСПОЛНИТЕ МЕЧТУ ВАШЕГО МАЛЫША!<br /> ПОДАРИТЕ ЕМУ СОБАКУ!</h2>
        <div className={styles.modal__qrcode}>
          <img src="picture/modal1-qr-code.png" alt="qr-code" width={126} height={126}/>
        </div>
        <p className={styles.modal__description}>
          Сканируйте QR-код или нажмите ОК
        </p>
        <div className={styles.modal__buttonWrapper}>
          <button className={styles.modal__button}>ОК</button>
        </div>
        
      </div>
    </div>
  )
}
