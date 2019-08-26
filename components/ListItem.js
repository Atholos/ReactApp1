/* eslint-disable indent */
/* eslint-disable linebreak-style */
import React from 'react';
import {Text, View, Image, TouchableOpacity} from 'react-native';
import PropTypes from 'prop-types';


const ListItem = (props) => {
  return (
    <TouchableOpacity style={styles.row}>
      <Image
        style={{flex: 1}}
        source={{uri: props.singleMedia.thumbnails.w160}}
      />
      <View style={{flex: 1}}>
        <Text style={styles.header}>{props.singleMedia.title}</Text>
        <Text>{props.singleMedia.description}</Text>
      </View>
    </TouchableOpacity>
  );
};

ListItem.propTypes = {
  singleMedia: PropTypes.object,
};

const styles = StyleSheet.create({
  row: {
    flex: 2,
   flexDirection: 'row',
   padding: 15,
   backgroundColor: '#ccc',
   marginBottom: 5,
  },
  header: {
     fontWeight: 'bold',
     flex: 1,
     paddingTop: 5,
     fontSize: 35,
  },
});

export default ListItem;
