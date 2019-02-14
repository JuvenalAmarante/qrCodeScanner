import React, {Component} from 'react';
import {Image, StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import Logo from '../images/logo.png';

export default class Home extends Component {
  render() {
    const { navigation } = this.props;
    return (
      <View style={styles.container}>
          <Image source={Logo} style={styles.image} />
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
    backgroundColor: '#FCFCFF',
  },
  image: {
    resizeMode: 'contain',
    marginTop: -100,
    marginBottom: 150,
    height: 200,
  },
  welcome: {
    fontSize: 20,
    color: 'white',
    textAlign: 'center',
    margin: 10,
  },
  button: {
    backgroundColor: '#273c75',
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderRadius: 10,
    borderColor: 'white',
    borderWidth: 1,
  },
});
