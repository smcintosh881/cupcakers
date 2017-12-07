import React, { Component } from 'react'
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
 
export class MapContainer extends Component {
render() {
    return (
      <Map google={this.props.google}
        initialCenter={{
            lat: 40.854885,
            lng: -88.081807
          }}
        zoom={15} />
    );
  }
}
 
export default GoogleApiWrapper({
  apiKey: "AIzaSyCmHg-Llk43dpasKcN7xuXihlsYDBg3_q0"
})(MapContainer)