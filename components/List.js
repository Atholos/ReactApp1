/* eslint-disable max-len */
/* eslint-disable no-undef */
/* eslint-disable linebreak-style */
/* eslint-disable keyword-spacing */
/* eslint-disable linebreak-style */
/* eslint-disable indent */
import React, {useContext, useEffect} from 'react';
import {FlatList} from 'react-native';
import PropTypes from 'prop-types';
import ListItem from './ListItem';
import {MediaContext} from '../contexts/MediaContext';

const List = () => {
  const [media, setMedia] = useContext(MediaContext);

  const getMedia = () => {
    mediaUrl = 'http://media.mw.metropolia.fi/wbma/media';
    idUrl = 'http://media.mw.metropolia.fi/wbma/media/';
    mediaArray = [];
    fetch(mediaUrl)
      .then((response) => {
        return response.json();
      })
      .then((result) => {
        result.forEach((n) => {
            console.log(n);
            const id = n.file_id;
            fetch(idUrl + id)
            .then((response) => {
              return response.json();
            })
            .then((result) => {
              mediaArray.push(result);
              console.log(mediaArray);
              setMedia(mediaArray);
            });
        });
      });
  };

  useEffect(() => getMedia(), []);

  return(
    <FlatList
      data={media}
      renderItem={({item}) => <ListItem singleMedia={item} />}
     // keyExtractor={(item, index) => index.toString}
      />
  );
};

List.propTypes = {
  mediaArray: PropTypes.array,
 };

export default List;
