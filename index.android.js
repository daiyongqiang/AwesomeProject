/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
  AppRegistry,
  Navigator,
} from 'react-native';

import Test01 from './js/Test001';

export default class AwesomeProject extends Component {

  componentDidMount() {

  }

  render() {
    return (
      <Navigator
        initialRoute={{name:"Test01", component: Test01}}
        configureScene={(route) => {
            return Navigator.SceneConfigs.VerticalUpSwipeJump;
          }}
        renderScene={(route, navigator) => {
            let Component = route.component;
            return <Component {...route.params} navigator = {navigator}/>
    }}/>
    );
  }
}

AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);
