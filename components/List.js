/* eslint-disable linebreak-style */
/* eslint-disable keyword-spacing */
/* eslint-disable linebreak-style */
/* eslint-disable indent */
import React from 'react';
import {FlatList} from 'react-native';
import PropTypes from 'prop-types';
import ListItem from './ListItem';

const List = (props) => {
  return(
    <FlatList
    data={props.mediaArray}
    renderItem={({item}) => <ListItem singleMedia={item} />}
      />
  );
};

List.propTypes = {
  mediaArray: PropTypes.array,
 };

export default List;
