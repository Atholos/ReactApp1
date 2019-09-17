/* eslint-disable max-len */
import React, {useState, useEffect} from 'react';
import {
  AsyncStorage,
  Image,
} from 'react-native';
import PropTypes from 'prop-types';
import {CardItem, Card, Text, Button, Body, Container, Header, Content, Right} from 'native-base';
import mediaAPI from '../hooks/ApiHooks';

const Profile = (props) => {
  const {getAvatar} = mediaAPI();

  const [avatar, setAvatar] = useState(undefined);
  getAvatar().then((result) =>{
    setAvatar(result);
  });
  const [user, setUser] = useState({});
  const getUser = async () => {
    const user = await AsyncStorage.getItem('user');
    setUser(JSON.parse(user));
  };
  useEffect(() => {
    getUser();
  }, []);
  console.log('ret user', user);

  const signOutAsync = async () => {
    await AsyncStorage.clear();
    props.navigation.navigate('Auth');
  };

  return (
    <Container>
      <Header />
      <Content padder>
        <Card>
          <CardItem header>
            <Text>Profile</Text>
          </CardItem>
          <CardItem>
            <Right>
              <CardItem >
                {avatar &&
                <Image source={{uri: avatar}} style ={{width: 100, height: 100}}/>
                }
              </CardItem>
            </Right>
            <Body>
              {user &&
              <Text>
           Hello {user.username}
              </Text>
              }
              {user &&
              <Text>
        Fullname: {user.full_name}
              </Text>
              }
              {user &&
              <Text>
        Email: {user.email}
              </Text>
              }
            </Body>
          </CardItem>
          <CardItem>
            <Right>
              <Button title="Logout!" onPress={signOutAsync}>
                <Text>Logout</Text>
              </Button>
            </Right>
          </CardItem>
        </Card>
      </Content>
    </Container>
  );
};

Profile.propTypes = {
  navigation: PropTypes.object,
};

export default Profile;
