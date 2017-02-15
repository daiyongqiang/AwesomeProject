/**
 * Created by DYQ on 2017/2/10.
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
} from 'react-native';

import {Title, Subtitle} from './Title';
import {Value, Item} from './Value';

import Test002 from './Test002';

export default class Test001 extends Component {

  goToSecondComponentPress() {
    const {navigator} = this.props;
    if (navigator) {
      //navigator.push 传入name和你想要跳的组件页面
      navigator.push({
        name: "Test002",
        component: Test002
      });
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.bar}>
          <TouchableOpacity>
            <Text style={styles.title}>
              返回
            </Text>
          </TouchableOpacity>

          <Text style={styles.title}>
            求吐槽
          </Text>

          <TouchableOpacity
            onPress={() => this.goToSecondComponentPress() }>
            <Text style={styles.title}>
              认证
            </Text>
          </TouchableOpacity>
        </View >

        <View style={styles.content}>
          <Title style={styles.testTitle}/>
          <Subtitle style={styles.testTitle}/>
          <Value title='row' value={{flexDirection:'row'}}>
            {Item}
          </Value>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0F0F0',
  },
  bar: {
    flex: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#D80000',
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 12,
    paddingRight: 12,
  },
  content: {
    flex: 1,
    backgroundColor: '#F0F0F0',
  },
  back: {
    fontSize: 16,
    textAlign: 'center',
    color: '#FFFFFF',
  },
  title: {
    fontSize: 16,
    textAlign: 'center',
    color: '#FFFFFF',
  },
  testTitle: {
    fontSize: 20,
    justifyContent: 'center',
    textAlign: 'center',
    color: '#FF0000',
  },
});


