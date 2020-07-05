import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

//app components
import Home from './app/components/Home';
import Login from './app/components/Login';
import Overview from './app/components/Overview';
import Register from './app/components/Register';
import Context from './Context';

const Stack = createStackNavigator();

export default function App() {
  let [contextValue, updateContext] = useState({});
  return (
    <Context.Provider value={contextValue}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home" style={styles.container}>
          <Stack.Screen name="Home" options={{ title: 'ECO-Management' }}>
            {props => <Home {...props} updateContext={updateContext}></Home>}
          </Stack.Screen>
          <Stack.Screen name="Login">
            {props => <Login {...props} updateContext={updateContext}></Login>}
          </Stack.Screen>

          <Stack.Screen name="Overview" component={Overview}></Stack.Screen>
          <Stack.Screen name="Register" component={Register}></Stack.Screen>
        </Stack.Navigator>
      </NavigationContainer>
    </Context.Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
});
