import React from 'react'
import PropTypes from 'prop-types'
import PlacesMedia from './PlacesMedia'
import PlacesRating from './PlacesRating'
const google = window.google


const ListPlacesItem = ({ place, marker }) => (
  <li>
    <div className="list-places-item"
      onMouseEnter={() => google.maps.event.trigger(marker, 'mouseover')}
      onMouseLeave={() => { google.maps.event.trigger(marker, 'mouseout') }}
    >
      <PlacesMedia photos={place.photos} />
      <PlacesRating rating={place.rating} />
      <span className="list-places-item-details-name">{place.name}</span>
    </div>
  </li>
);

ListPlacesItem.propTypes = {
  place: PropTypes.object.isRequired,
  marker: PropTypes.object.isRequired
}

export default ListPlacesItem