import React, { Component } from 'react'
import { VANCOUVER } from '../constants'
import { getRating } from '../lib'
const google = window.google

class Maps extends Component {
  shouldComponentUpdate() {
    return false
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.param !== this.param) {
      this.handleSearch(nextProps.param)
    }
  }

  handleSearch = (param) => {
    this.deleteMarkers()
    this.param = param
    this.service.textSearch({
      location: VANCOUVER,
      radius: 500,
      query: [this.param]
    }, this.callback)
  }

  callback = (places, status) => {
    if (status === google.maps.places.PlacesServiceStatus.OK) {
      const payload = []

      places.forEach(place => {
        this.createMarker(place)
        payload.push([place, this.marker])
      })
      this.props.handlePlaces(payload)
    }
  }

  componentDidMount() {
    this.param = ''
    this.markers = []
    this.createMap()
    this.infowindow = new google.maps.InfoWindow()
    this.service = new google.maps.places.PlacesService(this.map)
  }

  createMap = () => {
    this.map = new google.maps.Map(document.getElementById('map'), {
      center: VANCOUVER,
      zoom: 13
    })
  }

  deleteMarkers = () => this.setMapOnAll(null)
  setMapOnAll = (map) => this.markers.forEach(marker => marker.setMap(map))


  createMarker = (place) => {
    
    const marker = new google.maps.Marker({
      map: this.map,
      icon: getRating(place.rating),
      animation: google.maps.Animation.DROP,
      position: place.geometry.location
    })

    this.markers.push(marker)

    marker.addListener('mouseover', () => {
      this.infowindow.setContent(place.name)
      this.infowindow.open(this.map, marker)
    })
    marker.addListener('mouseout', () => {
      this.infowindow.close()
    })
    this.marker = marker
  }

  render() {
    return (
      <div className="App-body-map" ref='map' id="map" />
    );
  }
}

export default Maps;