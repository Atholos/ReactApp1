/* eslint-disable linebreak-style */
/* eslint-disable keyword-spacing */
/* eslint-disable linebreak-style */
/* eslint-disable indent */
import React, {useContext, useEffect} from 'react';
import {FlatList} from 'react-native';
import PropTypes from 'prop-types';
import ListItem from './ListItem';
import {MediaContext} from '../contexts/MediaContext';

const List = (props) => {
  const [media, setMedia] = useContext(MediaContext);

  const getMedia = () => {
    fetch('https://raw.githubusercontent.com/mattpe/wbma/master/docs/assets/test.json')
    .then((response) => {
      return response.json();
    })
    .then((result) => {
      console.log(result),
      setMedia(result);
    });
  };

  useEffect(() => getMedia(), []);

  return(
    <FlatList
      data={media}
      renderItem={({item}) => <ListItem singleMedia={item} />}
      />
  );
};

List.propTypes = {
  mediaArray: PropTypes.array,
 };

export default List;
