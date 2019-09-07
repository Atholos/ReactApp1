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
import useRegisterForm from '../hooks/RegisterHook';
import console = require('console');

const Login = (props) => { // props is needed for navigation
  const mediaUrl = 'http://media.mw.metropolia.fi/wbma/login';
  const userUrl = 'http://media.mw.metropolia.fi/wbma/users';

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
    await AsyncStorage.setItem('username', json.user.username);
    await AsyncStorage.setItem('fullname', json.user.full_name);
    await AsyncStorage.setItem('email', json.user.email);
    props.navigation.navigate('App');
  };

  const register = async (url, data1) => {
    console.log(data1);
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data1),
    });
    const json = await response.json();
    await AsyncStorage.setItem('username', json.user.username);
    await AsyncStorage.setItem('fullname', json.user.full_name);
    await AsyncStorage.setItem('email', json.user.email);
  };

 /*  useEffect(() => {
    signInAsync();
  }, []);

  useEffect(() => {
    register();
  }, []); */

  const {
    inputs,
    handleUsernameChange,
    handlePasswordChange,
  } = useSignUpForm();

  const {
    handleUsernameChangeRegister,
    handlePasswordChangeRegister,
    handleFullnameChangeRegister,
    handleEmailChangeRegister,
  } = useRegisterForm();

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
         placeholder='username'
         onChangeText={handleUsernameChangeRegister}
       />
       <FormTextInput
         autoCapitalize='none'
         value={inputs.password}
         placeholder='password'
         onChangeText={handlePasswordChangeRegister}
         secureTextEntry={true}
       />
       <FormTextInput
         autoCapitalize='none'
         value={inputs.fullname}
         placeholder='Your name'
         onChangeText={handleFullnameChangeRegister}
       />
       <FormTextInput
         autoCapitalize='none'
         placeholder='email'
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
