import React from 'react';
import {StyleSheet, View, Image, Text} from 'react-native';

const Single = (props) => {
  const URL = 'http://media.mw.metropolia.fi/wbma/uploads/';
  const {navigation} = props;
  const file = navigation.getParam('file', 'Tuut');
  console.log(file.title);
  return (
    <View style={styles.container}>
      <Image style={styles.Img} source={{uri: URL+file.thumbnails.w160}}/>
      <Text style={styles.title}>
        {file.title}
      </Text>
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
  Img: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
    borderWidth: 1,
    flex: 1,
  },
  Title: {
    height: 100,
    width: 200,
    flex: 1,
    fontSize: 48,
    alignSelf: 'center',
  },
});

export default Single;
