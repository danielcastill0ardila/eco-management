import React, { useState, useContext } from 'react';
import { View, StyleSheet, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Input, Text, Button } from 'react-native-elements';

const LOGIN_ENTITIES = {
  USERMAME: 'username',
  PASSWORD: 'password'
};

const Login = ({ updateContext, navigation }) => {
  let user = {
    username: '',
    password: ''
  };
  const [credentials, setCredentials] = useState(user);

  function handleForm(key, value) {
    setCredentials({
      ...credentials,
      [key]: value
    });
  }

  function submit() {
    if (!credentials.username || !credentials.password) {
      Alert.alert('Please, complete the information to continue!');
      return;
    }
    updateContext(credentials);
    navigation.navigate('Overview');
  }

  return (
    <View style={styles.container}>
      <Text h4>Set your credentiasls</Text>
      <Input
        placeholder={LOGIN_ENTITIES.USERMAME}
        leftIcon={<Icon name="user" size={14} />}
        autoCompleteType={LOGIN_ENTITIES.USERMAME}
        onChangeText={text => handleForm(LOGIN_ENTITIES.USERMAME, text)}
        clearTextOnFocus={true}
      />
      <Input
        placeholder={LOGIN_ENTITIES.PASSWORD}
        leftIcon={<Icon name="lock" size={14} />}
        autoCompleteType={LOGIN_ENTITIES.PASSWORD}
        textContentType={LOGIN_ENTITIES.PASSWORD}
        secureTextEntry={true}
        onChangeText={text => handleForm(LOGIN_ENTITIES.PASSWORD, text)}
        clearTextOnFocus={true}
      />
      <Button title="Login" onPress={submit} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '20%'
  }
});

export default Login;
