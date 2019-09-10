/* eslint-disable max-len */
import React from 'react';
import {Image} from 'react-native';
import {CardItem, Thumbnail, Left, Body, Card, Text} from 'native-base';

const Single = (props) => {
  const URL = 'http://media.mw.metropolia.fi/wbma/uploads/';
  const {navigation} = props;
  const file = navigation.getParam('file', 'Tuut');
  /* console.log(file.title); */
  return (
    <Card>
      <CardItem>
        <Left>
          <Thumbnail source={{uri: URL+file.thumbnails.w160}}/>
          <Body>
            <Text>
              {file.title}
            </Text>
          </Body>
        </Left>
      </CardItem>
      <CardItem>
        <Body>
          <Image source={{uri: URL+file.thumbnails.w160}} style={{height: 200, width: 350}}/>
          <Text>
            {file.description}
          </Text>
        </Body>
      </CardItem>


    </Card>
  );
};

export default Single;
