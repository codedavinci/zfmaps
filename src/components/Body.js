import React, { Component } from 'react'
import Maps from './Maps'
import DetailsContainer from './DetailsContainer'

class Body extends Component {
  state = {
    param: '',
    places: []
  }

  render() {
    const { param, places } = this.state
    return (
      <div className="App-body">
        <Maps
          param={param}
          handlePlaces={(places) => this.setState({ places })} />
        <DetailsContainer
          places={places}
          onSubmitSearch={(param) => this.setState({ param })} />
      </div>
    );
  }
};

export default Body;

