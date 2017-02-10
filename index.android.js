/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Navigator,
} from 'react-native';

import {Title, Subtitle} from './js/Title';
import {Value, Item} from './js/Value';
import FlexDirectionTest from './js/FlexDirectionTest';

export default class AwesomeProject extends Component {

  goToSecondComponentPress() {

  }

  render() {
    <Navigator
      initialRoute={{name:"FlexDirectionTest", component: FlexDirectionTest}}
      configureScene={(route) => {
            return Navigator.SceneConfigs.VerticalDownSwipeJump;
          }}
      renderScene={(route, navigator) => {
            let Component = route.component;
            return <Component {...route.params} navigator = {navigator}/>
    }}/>

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

AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);
