import React from 'react';
import List from '../components/List';
import {Container, Header} from 'native-base';
import PropTypes from 'prop-types';
import mediaAPI from '../hooks/ApiHooks';

const Home = (props) => {
  const {navigation} = props;
  const {getUserFromToken} = mediaAPI();
  getUserFromToken();
  const {userToContext} = mediaAPI();
  userToContext().then((user) => {
    console.log('usercontext', user);
  });

  return (
    <Container>
      <Header />
      <List navigation={navigation}></List>
    </Container>
  );
};

Home.propTypes = {
  navigation: PropTypes.object,
};

export default Home;
