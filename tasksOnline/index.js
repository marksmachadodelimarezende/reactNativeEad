/**
 * @format
 */

import {AppRegistry} from 'react-native';
//import Agenda from './src/screens/Agenda';
//import Auth from './src/screens/Auth';
import Navigator from './src/Navigator'
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => Navigator);
