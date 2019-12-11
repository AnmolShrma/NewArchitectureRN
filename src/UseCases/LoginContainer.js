import React, {useEffect} from 'react';
import LoginScreen from '../Entities/Login/LoginScreen';
import {AuthContext} from '../context/AuthProvider';
import {UserContext} from '../context/userProvider';
const LoginContainer = ({navigation}) => {
  const [authState, updateAuth] = React.useContext(AuthContext);
  const [userState, updateUser] = React.useContext(UserContext);

  console.log(authState, updateAuth);
  console.log('login user:', userState, updateUser);

  /**
   * hadleLogin: Handles the login process
   * @param {string} username the identity of the user to login
   * @param {string} password the secret key of the user to login
   **/
  const handleLogin = (loginID = '', password = '') => {
    updateAuth({loggedIn: true});
    updateUser({
      user: {
        parent: true,
      },
    });
    // navigation.navigate('Home');
  };

  const handleSignUp = () => {
    navigation.navigate('SignUp');
  };

  return <LoginScreen handleLogin={handleLogin} handleSignUp={handleSignUp} />;
};
export default LoginContainer;
