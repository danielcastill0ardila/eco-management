import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Button, Avatar } from 'react-native-elements';
import customStyles from '../../config/styles';

const Home = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Avatar rounded icon={{ name: 'home' }} />
      <Text style={styles.baseText}>Welcome to the APP</Text>
      <Button
        onPress={() => navigation.navigate('Login')}
        title="Login"
        type="outline"
      />
      <Button
        onPress={() => navigation.navigate('Register')}
        title="I don't have an account"
        type="clear"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  ...customStyles,
  baseText: {
    fontWeight: 'bold'
  },
  separator: {
    marginVertical: 8,
    borderBottomColor: '#737373',
    borderBottomWidth: StyleSheet.hairlineWidth
  }
});

export default Home;
