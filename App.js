import React from 'react';
import {} from 'react-native';
import Header from './src/components/Header';
import Navigation from './src/navigation';
import { Provider } from 'react-redux';
import store from './src/redux';
import persistStore from 'redux-persist/es/persistStore';
import { PersistGate } from 'redux-persist/integration/react';

const persistor = persistStore(store);

export default function App(){
  

  

  return(
    <PersistGate persistor={persistor}>
      <Provider store={store}>
        <Navigation/>    
      </Provider>
    </PersistGate>
  );
}