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
  const userUrl = 'http://media.mw.metropolia.fi/wbma/users';

  /* const user = {
    username: 'Atholos',
    password: '4th0l0s',
  }; */

  const signInAsync = async (url, data) => {
    const user = {
        username: data.username,
        password: data.password,
    };
    const response = await fetch(url, {
      method: 'POST',
      body: JSON.stringify(user),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const json = await response.json();
    await AsyncStorage.setItem('userToken', json.token);
    await AsyncStorage.setItem('username', json.user.username);
    await AsyncStorage.setItem('fullname', json.user.full_name);
    await AsyncStorage.setItem('email', json.user.email);
    props.navigation.navigate('App');
  };

  const register = async (url, data) => {
    console.log(data);
    console.log(url);
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    const json = await response.json();
    console.log('register ', json);
  };

  const {
    inputs,
    handleUsernameChange,
    handlePasswordChange,
    handleUsernameChangeRegister,
    handlePasswordChangeRegister,
    handleFullnameChangeRegister,
    handleEmailChangeRegister,
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
     <View style={styles.container}>
     <Text>Register</Text>
     <View style={styles.form}>
     <FormTextInput
         autoCapitalize='none'
         value={inputs.username}
         placeholder='Username'
         onChangeText={handleUsernameChangeRegister}
       />
     <FormTextInput
         autoCapitalize='none'
         value={inputs.password}
         placeholder='Password'
         onChangeText={handlePasswordChangeRegister}
         secureTextEntry={true}
       />
     <FormTextInput
         autoCapitalize='none'
         value={inputs.fullname}
         placeholder='Fullname'
         onChangeText={handleFullnameChangeRegister}
       />
     <FormTextInput
         autoCapitalize='none'
         placeholder='Email'
         onChangeText={handleEmailChangeRegister}
         value={inputs.email}
       />
       <Button title="Register" onPress={() => {
              register(userUrl, inputs);
              signInAsync(mediaUrl, inputs);
          }
        } />
     </View>
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
