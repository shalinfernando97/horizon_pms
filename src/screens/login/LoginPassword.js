import React from 'react';
import {
  View,
  StyleSheet,
  TextInput,
  Alert,
  Text,
  TouchableOpacity,
  ImageBackground,
  Image,
} from 'react-native';

import {BACKGROUND_IMAGE, LOGO_IMAGE} from '../../image/index';

import AsyncStorage from '@react-native-community/async-storage';

export default class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      password: '',
    };

    // binding
    this.onChangePasswordText = this.onChangePasswordText.bind(this);
    this.onPressLoginButton = this.onPressLoginButton.bind(this);
  }

  // when typing in password text field
  onChangePasswordText(value) {
    this.setState({password: value});
  }

  // when press login button
  async onPressLoginButton() {
    if (this.state.password === '') {
      // if password empty
       return Alert.alert(
        'Login Error!!',
        'Password is empty! Please input your password',
        [{text: 'OK', onPress: () => console.log('OK Pressed')}],
        {cancelable: false},
      );
    } else {
    }
  }

  render() {
    return (
      <View style={Styles.container}>
        <ImageBackground
          source={BACKGROUND_IMAGE}
          style={Styles.backgroundImage}>
          <View style={Styles.contentContainer}>
            <Image source={LOGO_IMAGE} style={Styles.logoImage} />
            <View style={Styles.inputContainer}>
              <TextInput
                style={Styles.inputStyles}
                placeholder="Password"
                placeholderTextColor="#000"
                secureTextEntry={true}
                onChangeText={this.onChangePasswordText}
              />
            </View>

            <View style={Styles.loginButtonContainer}>
              <TouchableOpacity onPress={this.onPressLoginButton}>
                <View style={Styles.loginButton}>
                  <Text style={Styles.buttonText}>LOGIN</Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </ImageBackground>
      </View>
    );
  }
}

const Styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: '#fff',
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  contentContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    height: '50%',
    backgroundColor: '#fff',
  },
  logoImage: {
    width: 250,
    height: 100,
    resizeMode: 'cover',
    marginBottom: 50,
  },
  inputContainer: {
    borderColor: '#000',
    borderWidth: 1,
    width: '80%',
    marginBottom: 20,
  },
  inputStyles: {
    color: '#000',
    width: '80%',
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 15,
    paddingRight: 15,
    fontSize: 16,
  },
  loginButtonContainer: {
    width: '80%',
  },
  loginButton: {backgroundColor: '#000'},
  buttonText: {textAlign: 'center', padding: 20, color: '#fff'},
});
