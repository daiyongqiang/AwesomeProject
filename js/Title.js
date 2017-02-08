'use strict'

import React, { Component } from 'react';
import {
    Text
} from 'react-native';

class Title extends Component {
    render() {
      return (
            <Text>标题</Text>
        );
    }
}

class Subtitle extends Component {
    render() {
        return (
            <Text>副标题</Text>
        );
    }
}

module.exports = { Title, Subtitle };
