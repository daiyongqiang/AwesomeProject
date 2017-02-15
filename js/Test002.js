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
        <View>
          <Text>Text1</Text>
          <Text>Text2</Text>
          <Text>Text3</Text>
          <Text>Text4</Text>
        </View>
        <View>
          <Text>Text1</Text>
          <Text>Text2</Text>
          <Text>Text3</Text>
          <Text>Text4</Text>
        </View>

        <View>
          <Text>Text1</Text>
          <Text>Text2</Text>
          <Text>Text3</Text>
          <Text>Text4</Text>
        </View>

        <View>
          <Text>Text1</Text>
          <Text>Text2</Text>
          <Text>Text3</Text>
          <Text>Text4</Text>
        </View>

        <View>
          <Text>Text1</Text>
          <Text>Text2</Text>
          <Text>Text3</Text>
          <Text>Text4</Text>
        </View>

        <View>
          <Text>Text1</Text>
          <Text>Text2</Text>
          <Text>Text3</Text>
          <Text>Text4</Text>
        </View>

        <View>
          <Text>Text1</Text>
          <Text>Text2</Text>
          <Text>Text3</Text>
          <Text>Text4</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    flex: 1,
    backgroundColor: '#D80000',
    flexWrap: 'wrap',
  }
});
