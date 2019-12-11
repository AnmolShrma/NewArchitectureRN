import React from 'react';
import {View, Text, Button} from 'react-native';

const HomeScreen = props => {
  const {loadUserData} = props;
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Home!</Text>
      <Button
        title="Update user data"
        onPress={() => loadUserData()}
        color="black"
      />
    </View>
  );
};

export default HomeScreen;
