/**
 * @format
 */

import {AppRegistry, Text, TouchableOpacity, TextInput} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

if (Text.defaultProps == null) {
  Text.defaultProps = {};
  Text.defaultProps.allowFontScaling = false;
  Text.defaultProps.style = {color: '#000000'};
}

if (TextInput.defaultProps == null) {
  TextInput.defaultProps = {};
  TextInput.defaultProps.allowFontScaling = false;
}

if (TouchableOpacity.defaultProps == null) {
  TouchableOpacity.defaultProps = {};
  TouchableOpacity.defaultProps.activeOpacity = 0.6;
}

AppRegistry.registerComponent(appName, () => App);
