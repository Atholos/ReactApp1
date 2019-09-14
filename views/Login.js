/* eslint-disable max-len */
import React, {useEffect} from 'react';
import {Text, Button} from 'react-native';
import FormTextInput from '../components/FormTextInput';
import useSignUpForm from '../hooks/LoginHooks';
import mediaAPI from '../hooks/ApiHooks';
import validate from 'validate.js';
import validation from '../validation/validation';

import {
  Container,
  Content,
  Form,
  Item,
  Body,
} from 'native-base';

const Login = (props) => {
  const {signInAsync, registerAsync, userCheck} = mediaAPI();
  const {
    inputs,
    handleFormChange,
  } = useSignUpForm();

  const LoginForm = () => {
    const {
      handleUsernameChange,
      handlePasswordChange,
      inputs,
    } = useSignUpForm();
    return (
      <Content>
        <Form>
          <Body>
            <Text>Login</Text>
          </Body>
          <Item>
            <FormTextInput
              autoCapitalize="none"
              placeholder="username"
              onChangeText={handleUsernameChange}
              value={inputs.username} required
            />
          </Item>
          <Item>
            <FormTextInput
              autoCapitalize="none"
              placeholder="password"
              secureTextEntry={true}
              onChangeText={handlePasswordChange}
              value={inputs.password} required
            />
          </Item>
          <Button
            title="Sign in!"
            onPress={() => {
              signInAsync(inputs, props);
            }}
          />
          <Button
            title="Sign up instead!"
            onPress={() => handleFormChange(<RegisterForm />)}
          />
        </Form>
      </Content>
    );
  };

  const RegisterForm = () => {
    const {
      handleUsernameChange,
      handlePasswordChange,
      inputs,
      handleEmailChange,
      handleFullnameChange,
      handlePasswordConfirmChange,
    } = useSignUpForm();

    return (
      <Content>
        <Form>
          <Body>
            <Text>Register!</Text>
          </Body>
          <Item>
            <FormTextInput
              autoCapitalize='none'
              placeholder='username'
              onChangeText={handleUsernameChange}
              onEndEditing={(evt) => {
                const uname = evt.nativeEvent.text;
                userCheck(uname);
              }}
              value= {inputs.username} required
            />
          </Item>
          <Item>
            <FormTextInput
              autoCapitalize="none"
              placeholder="password"
              onChangeText={handlePasswordChange}
              value={inputs.password}
              required
              onEndEditing={(evt) => {
                const pwd = evt.nativeEvent.text;
              }}
            />
          </Item>
          <Item>
            <FormTextInput
              autoCapitalize="none"
              placeholder="confirm password"
              onChangeText={handlePasswordConfirmChange}
              value={inputs.confirmPassword}
              required
              onEndEditing={(evt) => {
                const validPwd = evt.nativeEvent.text;
              }}
            />
          </Item>
          <Item>
            <FormTextInput
              autoCapitalize="none"
              placeholder="email"
              onChangeText={handleEmailChange}
              value={inputs.email}
              required
              onEndEditing={(evt) => {
                const validEmail = evt.nativeEvent.text;
              }}
            />
          </Item>
          <Item>
            <FormTextInput
              autoCapitalize="none"
              placeholder="fullname (Optional)"
              onChangeText={handleFullnameChange}
              value={inputs.fullname}
            />
          </Item>
          <Button
            title="Register!"
            onPress={() => {
              regValidation(inputs, props);
            }}
          />
          <Button
            title="Login Instead!"
            onPress={() => handleFormChange(<LoginForm />)}
          />
        </Form>
      </Content>
    );
  };

  const regValidation = (inputs, props) => {
    const constraints = {
      email: {
        presence: {
          message: '^Please enter an email address',
        },
        email: {
          message: '^Please enter a valid email address',
        },
      },
      password: {
        presence: {
          message: '^Please enter a password',
        },
        length: {
          minimum: 5,
          message: '^Your password must be at least 5 characters',
        },
      },
      username: {
        presence: {
          message: '^Please enter an username',
        },
        length: {
          minimum: 3,
          message: '^Username must be at least 3 characters',
        },
      },
      confirmPassword: {
        equality: 'password',
      },
    };

    const emailError = validate({email: inputs.email}, constraints);
    const passwordError = validate({password: inputs.password}, constraints);
    const passconfError = validate(
        {password: inputs.password, confirmPassword: inputs.confirmPassword},
        constraints
    );
    const usernameError = validate({username: inputs.username}, constraints);
    console.log(emailError.email, passwordError.password, usernameError.username, passconfError.confirmPassword);
    if (!emailError.email && !passwordError.password && !usernameError.username && !passconfError.confirmPassword) {
      registerAsync(inputs, props);
      console.log('KAIKKI OIKEIN = REKISTERÖI');
    } else {
      const errorArr = [emailError.email, passwordError.password, usernameError.username, passconfError.confirmPassword];
      for (let i=0; i< errorArr.length; i++) {
        if (errorArr[i]) {
          alert(errorArr[i]);
        }
      }
    }
  };

  useEffect(() => {
    handleFormChange(<LoginForm />);
  }, []);

  return <Container>{inputs.form}</Container>;
};

export default Login;
