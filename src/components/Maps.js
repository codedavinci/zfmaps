import React, { Component } from 'react';
import { Icon } from 'semantic-ui-react'
import { getRating } from '../lib'

const center = { lat: 49.2799838, lng: -123.129204 }
const google = window.google
class Maps extends Component {
  shouldComponentUpdate() {
    return false
  }

 
  componentWillReceiveProps(nextProps) {
    // console.log('CHeCKING EXECUTION', nextProps.center)
    // this.map.panTo({lat: nextProps.center.lat, lng: nextProps.center.lng})
    // console.log(this.map)
    //  console.log('DONE EXECUTION', nextProps.center)
    this.createMap()
    console.log('JUST CHECKING', nextProps.param)
    this.service.textSearch({
      location: center,
      radius: 1000,
      query: [nextProps.param]
    }, this.callback)
  }

  callback = (places, status) => {
    if (status === google.maps.places.PlacesServiceStatus.OK) {
      console.log('IT MADE IN HERE', places)
      places.forEach(place => this.createMarker(place))
    }
  }

  componentDidMount() {
    this.createMap()
    this.infowindow = new google.maps.InfoWindow()
    this.service = new google.maps.places.PlacesService(this.map)

  }

  createMap = () => {
    this.map = new google.maps.Map(document.getElementById('map'), {
      center: center,
      zoom: 13
    })
  }

  createMarker = (place) => {
    const rate = getRating(place.rating)
    const marker = new google.maps.Marker({
      map: this.map,
      icon: rate,
      position: place.geometry.location
    })

    google.maps.event.addListener(marker, 'click', () => {
      this.infowindow.setContent(place.name)
      this.infowindow.open(this.map, marker)
    })

  }

  render() {
    return (
      <div className="App-body-map" ref='map' id="map" />
    );
  }
}

export default Maps;