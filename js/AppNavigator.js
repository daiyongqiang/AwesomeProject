'use strict'

import React, { Component } from 'react';
import {
    Navigator
} from 'react-native';

class AppNavigator extends Component {
    render() {
        return (
            <Navigator
                initialRoute={{}}
                configureScene={(route) => {
                    return Navigator.SceneConfigs.HorizontalSwipeJump;
                }}
                renderScene={this.renderScene}
            />
        );
    }
}

function renderScene(route, navigator) {
    if (route.filter) {
      return (
        <FilterScreen navigator={navigator} />
      );
    }
}

module.exports = AppNavigator;