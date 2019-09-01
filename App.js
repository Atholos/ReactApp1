/* eslint-disable no-invalid-this */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
/* eslint-disable max-len */
/* eslint-disable react/jsx-no-undef */
/* eslint-disable indent */
import React from 'react';
import {StyleSheet, View, ToolbarAndroid, StatusBar, Image, flexDirection} from 'react-native';
import List from './components/List';
import Constants from 'expo-constants';

const mediaArray = [
  {
    'key': '0',
    'title': 'Title 1',
    'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sodales enim eget leo condimentum vulputate. Sed lacinia consectetur fermentum. Vestibulum lobortis purus id nisi mattis posuere. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sodales enim eget leo condimentum vulputate.',
    'thumbnails': {
      w160: 'http://placekitten.com/160/161',
    },
    'filename': 'http://placekitten.com/2048/1920',
  },
  {
    'key': '1',
    'title': 'Title 2',
    'description': 'Donec dignissim tincidunt nisl, non scelerisque massa pharetra ut. Sed vel velit ante. Aenean quis viverra magna. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sodales enim eget leo condimentum vulputate. Sed lacinia consectetur fermentum. ',
    'thumbnails': {
      w160: 'http://placekitten.com/160/162',
    },
    'filename': 'http://placekitten.com/2041/1922',
  },
  {
    'key': '2',
    'title': 'Title 3',
    'description': 'Phasellus imperdiet nunc tincidunt molestie vestibulum. Donec dictum suscipit nibh. Sed vel velit ante. Aenean quis viverra magna. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sodales enim eget leo condimentum vulputate. Sed lacinia consectetur fermentum.',
    'thumbnails': {
      w160: 'http://placekitten.com/160/163',
    },
    'filename': 'http://placekitten.com/2039/1920',
  },
];


const App = () => {
 return (
   <View style={styles.parentView}>
      <View style={styles.emptyBar}/>
      <View style={styles.statusBar}>
     <StatusBar
        barStyle = "dark-content"
        backgroundColor = "#00BCD4"
        // translucent = {false}
        // networkActivityIndicatorVisible = {true}
        />
     </View>
       <View>
     <ToolbarAndroid
       logo={require('./paw.jpg')}
      title="Cats"
      style={styles.toolbar}
       actions={[{title: 'Settings', icon: require('./icon_settings.png'), show: 'always'}]}
      onActionSelected={this.onActionSelected}
      />
     </View>
      <View>
       <Image
        source={require('./cats.jpg')}
        style={styles.img}
        />
     </View>
        <View style={styles.container}>
           <List mediaArray={mediaArray}></List>
        </View>
   </View>
 );
};

const onActionSelected = (position) => {
  if (position === 0) { // index of 'Settings'
    showSettings();
  }
};


const styles = StyleSheet.create({
 container: {
   backgroundColor: '#fff',
   /* shadowOffset: {width: 10, height: 10},
   shadowColor: 'red',
   shadowOpacity: 1.0,
   shadowRadius: 2, */
   margin: 20,
   flex: 1,
 },
 statusBar: {
  justifyContent: 'center',
},
toolbar: {
  height: 50,
},
emptyBar: {
  backgroundColor: 'gray',
  height: Constants.statusBarHeight,
},
img: {
  // flex: 1,
  width: null,
  height: 200,
},
parentView: {
  flex: 1,
},
});

export default App;
