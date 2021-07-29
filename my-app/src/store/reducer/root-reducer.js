/* eslint-disable import/no-extraneous-dependencies */
import { combineReducers } from 'redux';
import { NameSpace } from './name-space';
import modalsSlice from '../slices/modals';

export default combineReducers({
  [NameSpace.MODALS]: modalsSlice,
});
