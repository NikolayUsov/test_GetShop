/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './components/app/app';
import { Provider } from 'react-redux'
import store from './store/store';
import { setModalStatus } from './store/slices/modals';
import { ModalsName, ModalStatus } from './utils/const';

const showFirstModal = () => {
  store.dispatch(setModalStatus({
    [ModalsName.START]:  ModalStatus.OPEN,
  }))
}
setTimeout(showFirstModal, 2000)

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
