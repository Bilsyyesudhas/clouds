/**
 * @format
 */

// import {AppRegistry} from 'react-native';
// import App from './App';
// import {name as appName} from './app.json';

// AppRegistry.registerComponent(appName, () => App);
import React from 'react';
import { AppRegistry } from 'react-native';
import App from './App'; // Your main App component file
import { name as appName } from './app.json';
import firebase from '@react-native-firebase/app';
// import 'react-native-reanimated/plugin';
// Initialize Firebase
const firebaseConfig = {
  // Your Firebase configuration here
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

AppRegistry.registerComponent(appName, () => App);
