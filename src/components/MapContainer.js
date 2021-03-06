import React from 'react';

import { Map, Marker, Popup, TileLayer } from 'react-leaflet';

const MapContainer = props => {
    const { position } = props;
             
    return (
        <div className="map-container">
            <Map center={position} zoom={13}>
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
                />
            </Map>
        </div>
    );
};

export default MapContainer;
