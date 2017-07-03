import React from 'react';
import ListPlacesItem from './ListPlacesItem'


const ListPlaces = ({ places, handleHovering }) => (
  <div className="list-container">
    <ul>
      {places.map(place => <ListPlacesItem
        marker={place[1]}
        key={place[0].id}
        place={place[0]} />)}
    </ul>
  </div>
);

export default ListPlaces