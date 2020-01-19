import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import initialState from '../initialState';
import reducer from '../store/reducers/';

const store = createStore(reducer, initialState);

const ProviderMock = props => (
  <Provider store={store}>
      {props.children}
  </Provider>
);

export default ProviderMock;