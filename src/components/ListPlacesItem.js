import React from 'react'
import { Rating } from 'semantic-ui-react'
import blank from '../no-image.jpeg'
import { getRating } from '../lib'
const google = window.google


const ListPlacesItem = ({ place, marker }) => {
  const photo = place.photos && place.photos[0].getUrl({ 'maxWidth': 120, maxHeight: 150 })
  return (
    <li>
      <div className="list-places-item"
        onMouseEnter={() => google.maps.event.trigger(marker, 'mouseover')}
        onMouseLeave={() => {
          console.log('MOUSE OUT')
          google.maps.event.trigger(marker, 'mouseout')
        }}
      >
        <img src={photo || blank} alt="" />
        <div className="list-places-item-details">
          <Rating icon='star' defaultRating={place.rating} maxRating={5} />
          <div>
            <span><img style={{ maxWidth: 25, maxHeight: 25 }} src={getRating(place.rating)} alt="" /></span>
            <span className="list-places-item-details-rate">{place.rating || 'N/A'}</span>
          </div>
        </div>
        <span className="list-places-item-details-name">{place.name}</span>
      </div>
    </li>
  );
};

export default ListPlacesItem