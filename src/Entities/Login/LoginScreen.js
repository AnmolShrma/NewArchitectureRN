import React, {Component} from 'react';
import {Button, Image, StyleSheet, Text, View, TextInput} from 'react-native';

class LoginScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
    };
  }
  render() {
    const {username, password} = this.state;
    const {handleLogin, handleSignUp} = this.props;
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.inputBox}
          placeholder="User Name"
          onChange={username => this.setState({username})}
        />
        <TextInput
          style={styles.inputBox}
          placeholder="Password"
          onChange={password => this.setState({password})}
        />
        <Button
          title="Login"
          onPress={() => handleLogin(username, password)}
          color="white"
        />
        <Button title="Signup" onPress={handleSignUp} color="white" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#b58c3c',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputBox: {
    borderRadius: 40,
    marginTop: 10,
    marginBottom: 10,
    height: 50,
    width: '80%',
    borderColor: 'white',
    borderWidth: 1,
    padding: 10,
  },
  loginButton: {
    backgroundColor: '#b58c3c',
    height: 200,
    width: 200,
    marginTop: 30,
  },
});

export default LoginScreen;
