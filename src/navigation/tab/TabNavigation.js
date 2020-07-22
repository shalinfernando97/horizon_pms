import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

import Home from '../../screens/Home';
import Order from '../../screens/Order';

export default class TabNavigation extends React.Component {
  render() {
    const Tab = createBottomTabNavigator();

    return (
      <Tab.Navigator
        initialRouteName="Home"
        screenOptions={({route}) => ({
          tabBarIcon: ({focused, color, size}) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused ? 'list' : 'list-outline';
            } else if (route.name === 'Order') {
              iconName = focused ? 'reorder-four' : 'reorder-four-outline';
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: '#000',
          inactiveTintColor: 'gray',
          showLabel: false,
        }}>
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Order" component={Order} />
      </Tab.Navigator>
    );
  }
}
