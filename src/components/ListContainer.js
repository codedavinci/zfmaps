import React from 'react';
import ListPlaces from './ListPlaces'

const ListContainer = (props) => {
  return (
    <div className="App-body-details-list">
      <ListPlaces {...props} />
    </div>
  );
};

export default ListContainer