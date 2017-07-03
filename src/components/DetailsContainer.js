import React from 'react'
import Search from './Search'
import ListContainer from './ListContainer'

const DetailsContainer = (props) => (
  <div className="App-body-details">
    <Search {...props}/>
    <ListContainer places={props.places} />
  </div>
);





export default DetailsContainer;