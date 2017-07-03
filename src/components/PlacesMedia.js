import React from 'react';
import PropTypes from 'prop-types'
import blank from '../no-image.jpeg'

const PlacesMedia = ({ photos }) => {
  const photo = photos && photos[0].getUrl({ 'maxWidth': 120, maxHeight: 150 })
  return (
    <img src={photo || blank} alt="" />
  );
};

PlacesMedia.propTypes = {
  photos: PropTypes.array.isRequired
}

export default PlacesMedia;

