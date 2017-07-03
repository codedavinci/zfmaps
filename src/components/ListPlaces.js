import React from 'react';
import PropTypes from 'prop-types'
import ListPlacesItem from './ListPlacesItem'

const ListPlaces = ({ places }) => (
  <div className="list-container">
    <ul>
      {places.map(place => <ListPlacesItem
        marker={place[1]}
        key={place[0].id}
        place={place[0]} />)}
    </ul>
  </div>
);

ListPlaces.propTypes = {
  places: PropTypes.arrayOf(
    PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
    PropTypes.arrayOf(PropTypes.object.isRequired).isRequired
  ).isRequired
}

export default ListPlaces