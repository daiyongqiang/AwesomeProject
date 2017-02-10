'use strict'

import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
} from 'react-native';

class Title extends Component {
  render() {
    return (
      <Text style={styles.testTitle}>标题</Text>
    );
  }
}

class Subtitle extends Component {
  render() {
    return (
      <Text style={styles.testTitle}>副标题</Text>
    );
  }
}

const styles = StyleSheet.create({
  testTitle: {
    fontSize: 20,
    justifyContent: 'center',
    textAlign: 'center',
    color: '#FF0000',
  },
});

module.exports = {Title, Subtitle};
