/* eslint-disable max-len */
/* eslint-disable react/jsx-no-undef */
/* eslint-disable indent */
import React from 'react';
import {StyleSheet,
    View} from 'react-native';
import List from './components/List';
import {MediaProvider} from './contexts/MediaContext';


const App = () => {
 return (
   <MediaProvider>
      <View style={styles.container}>
        <List />
      </View>
   </MediaProvider>
 );
};

const styles = StyleSheet.create({
 container: {
   backgroundColor: '#fff',
 },
});

export default App;
