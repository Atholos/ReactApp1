/* eslint-disable no-trailing-spaces */
/* eslint-disable indent */
import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Button,
  AsyncStorage,
} from 'react-native';
import PropTypes from 'prop-types';
import FormTextInput from '../components/FormTextInput';
import useSignUpForm from '../hooks/LoginHooks';

const Login = (props) => { // props is needed for navigation
  const mediaUrl = 'http://media.mw.metropolia.fi/wbma/login';

  /* const user = {
    username: 'Atholos',
    password: '4th0l0s',
  }; */

  const signInAsync = async (url, data) => {
    const response = await fetch(url, {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const json = await response.json();
    await AsyncStorage.setItem('userToken', json.token);
    props.navigation.navigate('App');
  };

  const {
    inputs,
    handleUsernameChange,
    handlePasswordChange,
  } = useSignUpForm();

  return (
    <View style={styles.container}>
       <Text>Login</Text>
       <View style={styles.form}>
         <FormTextInput
           autoCapitalize='none'
           value={inputs.username}
           placeholder='username'
           onChangeText={handleUsernameChange}
         />
         <FormTextInput
           autoCapitalize='none'
           value={inputs.password}
           placeholder='password'
           onChangeText={handlePasswordChange}
           secureTextEntry={true}
         />
         <Button title="Sign in!" onPress={() => {
signInAsync(mediaUrl, inputs);
}
          } />
       </View>
     </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 40,
  },
});

// proptypes here
Login.propTypes = {
  navigation: PropTypes.object,
};


export default Login;
