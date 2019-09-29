/* eslint-disable react/display-name */
/* eslint-disable max-len */
/* eslint-disable linebreak-style */
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createBottomTabNavigator} from '../node_modules/react-navigation-tabs';
import {createStackNavigator} from '../node_modules/react-navigation-stack';
import Home from '../views/Home';
import Profile from '../views/Profile';
import Upload from '../views/Upload';
import Single from '../views/Single';
import MyFiles from '../views/MyFiles';
import AuthLoadingScreen from '../views/Authloading';
import Login from '../views/Login';
import {Icon} from 'native-base';
import React from 'react';

const TabNavigator = createBottomTabNavigator(
    {
      Home,
      Profile,
      Upload,
    },
    {
      defaultNavigationOptions: ({navigation}) => ({
        tabBarIcon: () => {
          const {routeName} = navigation.state;
          let iconName;
          if (routeName === 'Home') {
            iconName = 'home';
          } else if (routeName === 'Profile') {
            iconName = 'person';
          } else if (routeName === 'Upload') {
            iconName = 'md-cloud-upload';
          }

          // You can return any component that you like here!
          return <Icon
            name={iconName}
            size={25}
          />;
        },
      }),
    }
);

const StackNavigator = createStackNavigator(
    // RouteConfigs
    {
      Home: {
        screen: TabNavigator,
        navigationOptions: {
          header: null, // this will hide the header
        },
      },
      Single: {
        screen: Single,
      },
      Logout: {
        screen: Login,
      },
      MyFiles: {
        screen: MyFiles,
      },
    },
);

const Navigator = createSwitchNavigator({
  AuthLoading: AuthLoadingScreen,
  App: StackNavigator,
  Auth: Login,
},
{
  initialRouteName: 'AuthLoading',
}
);

export default createAppContainer(Navigator);
