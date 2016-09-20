/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import mainScreen from './App/mainScreen'

class AwesomeCalculator extends Component {
  render() {
    return (
      <mainScreen/>
    );
  }
}



AppRegistry.registerComponent('AwesomeCalculator', () => AwesomeCalculator);
