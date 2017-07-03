import React from 'react';
import PropTypes from 'prop-types'
import { Rating } from 'semantic-ui-react'
import { getRating } from '../lib'

const PlacesRating = ({ rating }) => (
    <div className="list-places-item-details">
      <Rating icon='star' defaultRating={rating} maxRating={5} />
      <div>
        <span><img style={{ maxWidth: 25, maxHeight: 25 }} src={getRating(rating)} alt="" /></span>
        <span className="list-places-item-details-rate">{rating || 'N/A'}</span>
      </div>
    </div>
  );

PlacesRating.propTypes = {
  rating: PropTypes.number.isRequired
}


export default PlacesRating;