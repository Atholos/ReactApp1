import React, {useState} from 'react';
import PropTypes from 'prop-types';

const MediaContext = React.createContext({});
const MediaProvider = (props) => {
  const {
    media: initialMedia,
    user: initialUser,
    myMedia: initialMyMedia,
    children,
  } = props;
  const [media, setMedia] = useState(initialMedia);
  const [user, setUser] = useState(initialUser);
  const [myMedia, setMyMedia] = useState(initialMyMedia);

  const appContext = {
    user,
    setUser,
    media,
    setMedia,
    myMedia,
    setMyMedia,
  };

  return (
    <MediaContext.Provider value={appContext}>
      {children}
    </MediaContext.Provider>
  );
};

MediaProvider.propTypes = {
  media: PropTypes.array,
  myMedia: PropTypes.array,
  user: PropTypes.object,
  children: PropTypes.node,
};

MediaProvider.defaultProps = {
  media: [],
  myMedia: [],
  user: {},
};

export {MediaContext, MediaProvider};
