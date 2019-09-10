/* eslint-disable max-len */
import React from 'react';
import PropTypes from 'prop-types';
import useSignUpForm from '../hooks/LoginHooks';
import mediaAPI from '../hooks/ApiHooks';
import {Container, Input, Content, Form, Button, Text, Item, Header} from 'native-base';


const Login = (props) => {
  const {
    inputs,
    handleUsernameChange,
    handlePasswordChange,
    handleEmailChange,
    handleFullnameChange,
  } = useSignUpForm();
  const {signInAsync, registerAsync} = mediaAPI();
  return (
    <Container>
      <Content>
        <Header />
        <Form>
          <Text>Login</Text>
          <Item stackedLabel>
            <Input
              autoCapitalize='none'
              value={inputs.username}
              placeholder='Username'
              onChangeText={handleUsernameChange}
            />
          </Item>
          <Item fixedLabel last>
            <Input
              autoCapitalize='none'
              value={inputs.password}
              placeholder='Password'
              onChangeText={handlePasswordChange}
              secureTextEntry={true}
            />
          </Item>
        </Form>
        <Button title="Sign in!" onPress={
          () => {
            signInAsync(inputs, props);
          }
        } />
        <Form>
          <Item>
            <Text>Register</Text>
          </Item>
          <Item>
            <Input
              autoCapitalize='none'
              value={inputs.username}
              placeholder='username'
              onChangeText={handleUsernameChange}
            />
          </Item>
          <Item>
            <Input
              autoCapitalize='none'
              value={inputs.password}
              placeholder='password'
              onChangeText={handlePasswordChange}
            />
          </Item>
          <Item>
            <Input
              autoCapitalize='none'
              value={inputs.email}
              placeholder='email'
              onChangeText={handleEmailChange}
            />
          </Item>
          <Item>
            <Input
              value={inputs.fullname}
              placeholder='fullname'
              onChangeText={handleFullnameChange}
            />
          </Item>
        </Form>
        <Button transparent info title="Register!" onPress={
          () => {
            registerAsync(inputs, props);
          }
        } />
      </Content>
    </Container>
  );
};

Login.propTypes = {
  navigation: PropTypes.object,
};


export default Login;
