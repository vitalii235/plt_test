/**
 * @format
 */

import {AppRegistry} from 'react-native';
import React from 'react';
import App from './App';
import {name as appName} from './app.json';
import {NavigationContainer} from '@react-navigation/native';
import store from './store';
import {Provider} from 'react-redux';

const Render = () => (
  <NavigationContainer>
    <Provider store={store}>
      <App />
    </Provider>
  </NavigationContainer>
);

AppRegistry.registerComponent(appName, () => Render);
