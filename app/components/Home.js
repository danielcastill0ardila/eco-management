import React from 'react';
import { View, Text, StyleSheet, Alert } from 'react-native';
import { Button, Avatar } from 'react-native-elements';

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
        onPress={() => navigation.navigate('Login')}
        title="I don't have an account"
        type="clear"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
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
