import React from 'react';
import { render } from '@testing-library/react';
import ButtonNumber from './button-number';

const handleButtonNumberClick = jest.fn();

describe('Test Button number', () => {
  it('Should create snapshot correctly', () => {
    const { asFragment } = render(<ButtonNumber value="5" handleButtonNumberClick={handleButtonNumberClick} />);
    expect(asFragment()).toMatchSnapshot();
  });
});
