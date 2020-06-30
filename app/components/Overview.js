import React, { useContext } from 'react';
import { View, Text } from 'react-native';

import Context from '../../Context';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Profile from './Profile';
function HomeScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Home!</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();

const Overview = () => {
  let value = useContext(Context);

  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
};

export default Overview;
