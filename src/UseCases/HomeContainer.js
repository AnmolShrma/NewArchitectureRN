import React from 'react';
import HomeScreen from '../Entities/Home/HomeScreen';
import {AuthContext} from '../context/AuthProvider';
import {UserContext} from '../context/userProvider';

const HomeContainer = () => {
  const [authState, updateAuth] = React.useContext(AuthContext);
  const [userState, updateUser] = React.useContext(UserContext);

  console.log(authState, updateAuth);
  console.log('login user:', userState, updateUser);
  const loadUserData = () => {
    updateAuth({loggedIn: true});
    updateUser({
      user: {
        parent: true,
      },
    });
  };

  return <HomeScreen loadUserData={loadUserData} hello={'hi'} />;
};

export default HomeContainer;
