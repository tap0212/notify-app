/**
 * @format
 */

import { AppRegistry } from 'react-native';
// import messaging from '@react-native-firebase/messaging';
// import AsyncStorage from '@react-native-community/async-storage';
import App from './src/App';
import { name } from './app.json';

/* // background: Android only
messaging().setBackgroundMessageHandler(async (remoteMessage) => {
  // do AsyncStorage or network requests with remoteMessage here.
  await AsyncStorage.setItem('incidents', String(remoteMessage?.data?.incidents || '0'));
}); */
AppRegistry.registerComponent(name, () => App);
