import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import LoginUserName from '../../screens/login/LoginUserName';
import LoginPassword from '../../screens/login/LoginPassword';

export default class StackNavigation extends React.Component {
  render() {
    const Stack = createStackNavigator();
    return (
      <Stack.Navigator
        initialRouteName="LoginUserName"
        screenOptions={{headerShown: false}}>
        <Stack.Screen name="LoginUserName" component={LoginUserName} />
        <Stack.Screen name="LoginPassword" component={LoginPassword} />
      </Stack.Navigator>
    );
  }
}
