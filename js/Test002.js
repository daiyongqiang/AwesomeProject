/**
 * Created by DYQ on 2017/2/14.
 */
'use strict'

import React, {Component} from 'react';
import {
  View,
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
  Navigator,
  Platform,
  BackAndroid,
} from 'react-native';

import {Circle, SmallCircle} from './Value';

export default class Test002 extends Component {

  componentDidMount() {
    const {navigator} = this.props;
    if (Platform.OS === 'android') {
      BackAndroid.addEventListener('hardwareBackPress', () => {
        navigator.pop();
        return true;
      });
    }
  }

  componentWillUnmount() {
    if (Platform.OS === 'android') {
      BackAndroid.removeEventListener('hardwareBackPress', () => {
      });
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Circle />
        <Circle />
        <Circle />
        <Circle />
        <Circle />
        <Circle />
        <Circle />
        <Circle />
        <Circle />
        <Circle />
        <SmallCircle />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row-reverse', //当值为row时，主轴为左右方向，交叉轴为上下方向；当为column时，主轴为上下方向，交叉轴为左右方向
    flex: 1,
    backgroundColor: '#D80000',
    flexWrap: 'wrap',
    alignItems: 'center', //交叉轴方向对齐方式
    justifyContent: 'center', //主轴方向对齐方式
  }
});
