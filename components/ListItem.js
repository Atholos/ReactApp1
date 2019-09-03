/* eslint-disable max-len */
/* eslint-disable indent */
/* eslint-disable linebreak-style */
import React from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import PropTypes from 'prop-types';

const ListItem = (props) => {
  const URL = 'http://media.mw.metropolia.fi/wbma/uploads/';
  const {navigation, singleMedia} = props;
  return (
      <View style={styles.main}>
          <TouchableOpacity style={styles.rowitems}
          onPress={
            () => {
              props.navigation.push('Single', {file: singleMedia});
  }}>
              <View style={styles.imagebox}>
                  <Image
                      style={styles.image}
                      source={{uri: URL+props.singleMedia.thumbnails.w160}}
                  />
              </View>
              <View style={styles.textbox}>
                  <Text style={styles.title} numberOfLines={1}>{props.singleMedia.title}</Text>
                  <Text numberOfLines={5}> {props.singleMedia.description}</Text>
              </View>
          </TouchableOpacity>
      </View>
  );
};

ListItem.propTypes = {
  singleMedia: PropTypes.object,
};

const styles = StyleSheet.create({

  main: {
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
  },
  textbox: {
      flex: 1,
      padding: 10,
      justifyContent: 'center',
  },
  imagebox: {
      flex: 1,
  },
  image: {
      flex: 1,
  },
  rowitems: {
      backgroundColor: 'lightgrey',
      flex: 2,
      flexDirection: 'row',
      borderRadius: 5,
      borderColor: 'white',
      margin: 10,
  },
  title: {
      fontSize: 35,
  },
});

export default ListItem;
