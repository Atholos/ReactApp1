/* eslint-disable max-len */
/* eslint-disable no-undef */
/* eslint-disable linebreak-style */
/* eslint-disable keyword-spacing */
/* eslint-disable linebreak-style */
/* eslint-disable indent */
import React, {useContext, useEffect} from 'react';
import PropTypes from 'prop-types';
import ListItem from './ListItem';
import {MediaContext} from '../contexts/MediaContext';
import {List as BaseList} from 'native-base';

const List = (props) => {
  const {media, setMedia} = useContext(MediaContext);

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
              console.log('mediaArray: '+mediaArray);
              setMedia(mediaArray);
            });
        });
      });
  };

  useEffect(() => getMedia(), []);

  return (
    <BaseList
      dataArray={media}
      renderRow={(item) =>
        <ListItem
          singleMedia={item}
          navigation={props.navigation}>
        </ListItem>
      }
    />
  );
};


List.propTypes = {
  mediaArray: PropTypes.array,
 };

export default List;
