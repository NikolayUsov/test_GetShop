/* eslint-disable react/prop-types */
import React from 'react';
import { useSelector } from 'react-redux';
import { selectModalsStatus } from '../../store/slices/modals';
import { ModalStatus } from '../../utils/const';

export default function Modal({ children, name }) {
  if (useSelector(selectModalsStatus)[name] === ModalStatus.CLOSE) {
    return null;
  }
  return (
    <div>
      {children}
    </div>
  );
}
