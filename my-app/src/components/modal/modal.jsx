/* eslint-disable react/prop-types */
import React from 'react';

export default function Modal({ children, isOpen }) {
  if (!isOpen) {
    return null;
  }
  return (
    <div>
      {children}
    </div>
  );
}
