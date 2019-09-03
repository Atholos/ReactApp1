import React from 'react';
import {StyleSheet, View} from 'react-native';
import {MediaProvider} from './contexts/MediaContext';
import Navigator from './Navigators/Navigator';


const App = () => {
  return (
    <MediaProvider>
      <Navigator/>
    </MediaProvider>
  );
};

export default App;
