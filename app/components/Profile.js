import React, { useContext } from 'react';
import { View, Text, Image } from 'react-native';
import { Avatar, Card, ListItem, Button, Icon } from 'react-native-elements';
import Context from '../../Context';

const Profile = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Avatar
        rounded
        source={{
          uri: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg'
        }}
      />
      <Card title="HELLO WORLD">
        <Text style={{ marginBottom: 10 }}>
          The idea with React Native Elements is more about component structure
          than actual design.
        </Text>
        <Button
          icon={<Icon name="code" color="#ffffff" />}
          buttonStyle={{
            borderRadius: 0,
            marginLeft: 0,
            marginRight: 0,
            marginBottom: 0
          }}
          title="VIEW NOW"
        />
      </Card>
      <Text>PROFILE</Text>
    </View>
  );
};

export default Profile;
