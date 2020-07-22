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

export default class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: '',
    };

    // binding
    this.onChangeUserNameText = this.onChangeUserNameText.bind(this);
    this.onPressNextButton = this.onPressNextButton.bind(this);
  }

  onChangeUserNameText(value) {
    this.setState({userName: value});
  }

  async onPressNextButton() {
    if (this.state.userName === '') {
      // if user name empty
      return Alert.alert(
        'Login Error!!',
        'User name is empty! Please input your username',
        [{text: 'OK', onPress: () => console.log('OK Pressed')}],
        {cancelable: false},
      );
    } else {
      this.props.navigation.navigate('LoginPassword');
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
                placeholder="User Name"
                placeholderTextColor="#000"
                onChangeText={this.onChangeUserNameText}
              />
            </View>

            <View style={Styles.loginButtonContainer}>
              <TouchableOpacity onPress={this.onPressNextButton}>
                <View style={Styles.loginButton}>
                  <Text style={Styles.buttonText}>NEXT</Text>
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
