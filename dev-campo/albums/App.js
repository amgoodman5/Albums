/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  Text,
  View
} from 'react-native';
import Header from './src/components/header'


export default class App extends Component<{}> {
  render() {
    return (
      <Header/>
    );
  }
}