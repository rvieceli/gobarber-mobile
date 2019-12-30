import React from 'react';
import { YellowBox, StatusBar } from 'react-native';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';

import './config/reactotronConfig';

import { store, persistor } from './store';

import App from './App';

YellowBox.ignoreWarnings(['Warning: DatePickerAndroid']);

export default function Index() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <StatusBar barStyle="light-content" backgroundColor="#7159c1" />
        <App />
      </PersistGate>
    </Provider>
  );
}
