/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import { ModalsName, ModalStatus } from '../../utils/const';
import { NameSpace } from '../reducer/name-space';

const initialState = {
  modals: {
    [ModalsName.FORM]: ModalStatus.CLOSE,
    [ModalsName.START]: ModalStatus.CLOSE,
  }
};

const modalSlice = createSlice({
  name: 'modals',
  initialState,
  reducers: {
    setModalStatus(state, action) {
      state.modals = {...state.modals, ...action.payload};
    },
  },
});

const selectModalsStatus = (state) => state[NameSpace.MODALS].modals;

export { selectModalsStatus }
export const { setModalStatus } = modalSlice.actions;
export default modalSlice.reducer;
