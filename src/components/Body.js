import React, { Component } from 'react'
import Maps from './Maps'
import DetailsContainer from './DetailsContainer'

class Body extends Component {
  state = {
   params: ''
  }

  // updateMap = (res) => {
  //   this.setState({ center: res[0] })
  // }

  // handleBoundsChanged = () => (this.setState({ bounds: this._map.getBounds(), center: this._map.getCenter() }))
  onSubmitSearch = (param) => {
   this.setState({ param })
  }


  render() {
    const { param} = this.state
    return (
      <div className="App-body">
        <Maps param={param} />
        <DetailsContainer onSubmitSearch={this.onSubmitSearch} />
      </div>
    );
  }
};

export default Body;

