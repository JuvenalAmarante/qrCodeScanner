/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TouchableOpacity} from 'react-native';

export default class Home extends Component {
  render() {
    const { navigation } = this.props;
    return (
      <View style={styles.container}>
          <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Camera')}>
             <Text style={styles.welcome}>Abrir Leitor</Text>
          </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#273c75',
  },
  welcome: {
    fontSize: 20,
    color: 'white',
    textAlign: 'center',
    margin: 10,
  },
  button: {
    borderColor: 'white',
    borderWidth: 1,
    marginBottom: 5,
  },
});
