import React from 'react';
import { render, screen } from '@testing-library/react';
import OrderFrom from './order-form';
import { KeysType } from '../../utils/const';
import userEvent from '@testing-library/user-event';

const Buttons = [KeysType.BACKSPACE, ...new Array(10).fill('').map((elem, index) => index)];
const fakePhoneNumber = '9061234565';

describe('Test order-form component', () => {
    beforeEach(() => {
      render(<OrderFrom />)
    });
    it('Should render correctly', () => {
      expect(screen.getByPlaceholderText('+7(___)___-__-__')).toBeInTheDocument();
      expect(screen.getByTestId('submit-button')).toBeDisabled();
      expect(screen.getByTestId('confirm').checked).toBe(false);
    });

    it('Should check correctly user event', async() => {
      
      fakePhoneNumber.split('').forEach((value) => {
        userEvent.click(screen.getByTestId(`phone-number-${value}`))
      })
      expect(screen.getByTestId('phone-input')).toHaveValue('+7(906)123-45-65')
      expect(screen.getByTestId('submit-button')).toBeDisabled();
      userEvent.click(screen.getByTestId('confirm'));
      expect(screen.getByTestId('submit-button')).toBeEnabled();
    })
})