/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import { ModalsName, ModalStatus } from '../../utils/const';

const initialState = {
  [ModalsName.FORM]: ModalStatus.CLOSE,
  [ModalsName.START]: ModalStatus.CLOSE,
};

const modalSlice = createSlice({
  name: 'modals',
  initialState,
  reducers: {
    setModalStatus(state, action) {
      state[action.modalName] = action.status;
    },
  },
});

export const { setModalStatus } = modalSlice.actions;
export default modalSlice.reducer;
