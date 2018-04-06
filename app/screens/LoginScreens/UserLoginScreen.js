import React, { Component } from 'react';
import { StyleSheet, Text, View, AppRegistry, Button, TextInput, TouchableOpacity } from 'react-native';

import Header from './../../components/Header';

export default class UserLoginScreen extends Component {
  
  static navigationOptions = {
    title: 'Login',
    headerStyle: {
      backgroundColor: '#D8D8D8',
    },
    headerTintColor: 'black',
    headerTitleStyle: {
      fontWeight: 'normal',
    },
  };

  render() {
    return (
      <View style={styles.screenContainer}>
        <Text style={styles.welcomeText}>
          Let's get you logged in! 
        </Text>
        <View style={styles.formContainer}>
          <TextInput
            style={styles.formTextInput}
            placeholder="First Name"
            placeholderTextColor='black'
          />
          <TextInput
            style={styles.formTextInput}
            placeholder="Last Name"
            placeholderTextColor='black'
          />
          <TextInput
            style={styles.formTextInput}
            placeholder="Email ID"
            placeholderTextColor='black'
          />
        </View>
        <View style={{ flex: 1 }}>
          <TouchableOpacity
            style={styles.buttonStyle}
            onPress={() => this.props.navigation.navigate('PetDetails')}
          >
            <Text style={styles.textButtonStyle}>
              Login
            </Text>
          </TouchableOpacity>  
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    alignSelf: 'stretch',
    justifyContent: 'space-around'
  },
  welcomeText: {
    color: 'black',
    fontSize: 30,
    margin: 15
  },
  formContainer: {
    flex: 1,
    // justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    // alignSelf: 'stretch',
    // justifyContent: 'space-around',
    width:200,
    // height:200,
    margin: 30
  },
  formTextInput: {
    height: 50, 
    width: 150, 
    borderWidth: 1, 
    margin: 5, 
    borderColor: 'black',
  },
  buttonStyle: {
    backgroundColor: '#5AC8B0',
    borderRadius: 7
  },
  textButtonStyle: {
    margin: 8
  }
});
