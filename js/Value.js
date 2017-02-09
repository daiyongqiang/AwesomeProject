'use strict'

import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

class Circle extends Component {
  render() {
    return (
      <View style={styles.circleShape}/>
    );
  }
}

class Value extends Component {
  render() {
    var value =
      <View style={styles.mainContainer}>
        <Text style={styles.valueText}>{this.props.title}</Text>
        <View style={styles.contentContainer}>
          <View style={[styles.valueContainer, this.props.value]}>
            { this.props.children }
          </View>
        </View>
      </View>;
    return value;
  }
}

//定义一个数组放置5个圆
const Item = [<Circle/>, <Circle/>, <Circle/>, <Circle/>, <Circle/>];

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    flexDirection: 'column',
  },
  contentContainer: {
    flexDirection: 'column',
    flex: 1,
  },
  valueContainer: {
    flex: 1,
    alignItems:'center',
    justifyContent:'center',
    backgroundColor: '#ff00ff',
  },
  circleShape: {
    backgroundColor: '#527FE4',
    borderRadius: 20 / 2,
    height: 20,
    width: 20,
    margin: 1
  },
  valueText: {
    textAlign: 'center',
    color: '#333333',
  },
});

module.exports = {Value, Item};
