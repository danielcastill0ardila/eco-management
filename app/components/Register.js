import React, { useState } from 'react';
import { View, StyleSheet, Alert } from 'react-native';
//import Icon from 'react-native-vector-icons/FontAwesome';
import { Input, Text, Button } from 'react-native-elements';
import customStyles from '../../config/styles';
import { registerUser } from '../API/index';

import { Formik } from 'formik';

const REGISTER_ENTITIES = {
  USERMAME: 'username',
  PASSWORD: 'password',
  EMAIL: 'email',
  NAME: 'name'
};

const Register = () => {
  const [loading, setLoading] = useState(false);

  async function submit(user) {
    if (!user.username || !user.password || !user.name || !user.email) {
      Alert.alert('Please, complete the information to continue!');
      return;
    }
    setLoading(true);
    //Building custom push messages
    let createdUser = await registerUser(user);

    setLoading(false);
    navigation.navigate('Home');
  }

  return (
    <Formik
      initialValues={{
        name: '',
        username: '',
        email: '',
        password: ''
      }}
      onSubmit={values => submit(values)}
    >
      {({ handleSubmit, handleBlur, handleChange, values }) => (
        <View style={customStyles.container}>
          <Text h4>Create your own account</Text>
          <Input
            placeholder={REGISTER_ENTITIES.EMAIL}
            autoCompleteType={REGISTER_ENTITIES.EMAIL}
            onChangeText={handleChange(REGISTER_ENTITIES.EMAIL)}
            clearTextOnFocus={true}
            value={values.email}
            onBlur={handleBlur(REGISTER_ENTITIES.EMAIL)}
          />
          <Input
            placeholder={REGISTER_ENTITIES.NAME}
            autoCompleteType={REGISTER_ENTITIES.NAME}
            onChangeText={handleChange(REGISTER_ENTITIES.NAME)}
            clearTextOnFocus={true}
            value={values.name}
            onBlur={handleBlur(REGISTER_ENTITIES.NAME)}
          />
          <Input
            placeholder={REGISTER_ENTITIES.USERMAME}
            autoCompleteType={REGISTER_ENTITIES.USERMAME}
            onChangeText={handleChange(REGISTER_ENTITIES.USERMAME)}
            clearTextOnFocus={true}
            value={values.username}
            onBlur={handleBlur(REGISTER_ENTITIES.USERMAME)}
          />
          <Input
            placeholder={REGISTER_ENTITIES.PASSWORD}
            autoCompleteType={REGISTER_ENTITIES.PASSWORD}
            textContentType={REGISTER_ENTITIES.PASSWORD}
            secureTextEntry={true}
            onChangeText={handleChange(REGISTER_ENTITIES.PASSWORD)}
            clearTextOnFocus={true}
            value={values.password}
            onBlur={handleBlur(REGISTER_ENTITIES.USERMAME)}
          />
          <Button
            onPress={handleSubmit}
            title="Create account"
            loading={loading}
            disabled={loading}
          />
        </View>
      )}
    </Formik>
  );
};

export default Register;
