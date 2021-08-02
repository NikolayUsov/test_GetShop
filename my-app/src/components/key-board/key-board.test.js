import React from 'react';
import { render, screen } from '@testing-library/react';
import KeyBoard from './key-board';
import { KeysType } from '../../utils/const';
const Buttons = [KeysType.BACKSPACE, ...new Array(10).fill('').map((elem, index) => index)];

describe('Test key board components', () => {
    it('Should correctly buttons', () => {
        render(<KeyBoard />)
       expect(screen.getAllByRole('button').length).toBe(Buttons.length)
    })
})