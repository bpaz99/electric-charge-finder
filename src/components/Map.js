import React from 'react';
import { Map, GoogleApiWrapper,Marker } from 'google-maps-react';


function Mapcontainer(props) {
    const mapStyles = {
        width: '95%',
        height: '95%',
        margin:"0 auto"
      };

    return (      
        <Map
          google={props.google}
          zoom={14}
          style={mapStyles}
          initialCenter={{ lat: props.lat, lng: props.lng}}
        >
        {props.data.map(e => {
                return <Marker position={{lat:e.AddressInfo.Latitude, lng:e.AddressInfo.Longitude}}></Marker>
        })}
        </Map>
    );
}






export default GoogleApiWrapper({
    apiKey:"AIzaSyDqvu9SY3I-flflWzM5mSA1AGzjkYW-77I"
})(Mapcontainer);

