import React, { Component } from "react"
import 'leaflet/dist/leaflet.css'
import L from 'leaflet'
import {MapContainer,TileLayer, Marker,Popup} from 'react-leaflet'
import '../Map.css'

import styled from "styled-components"


import Icon from "leaflet/dist/images/marker-icon.png";
import iconShadow from "leaflet/dist/images/marker-shadow.png";










export default class Map extends Component  {
    render()
    {
        if (typeof window !== 'undefined' && !!window.document && !!window.document.createElement) {
            let DefaultIcon = L.icon({
                iconUrl: Icon,
                shadowUrl: iconShadow
            });
            return (
                <MapContainer center={{ lat: '41.38821390874137', lng: '2.170135733451167' }} zoom={18} scrollWheelZoom={false}>
                    <TileLayer
                        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    <Marker position={{ lat: '41.3871835930101', lng: '2.170006987425101' }} icon={DefaultIcon}>
                        <Popup>
                            <Text>Plaça catalunya</Text>
                        </Popup>
                    </Marker>
                </MapContainer>
            )
        }
        return null
    }
}




const Text = styled.div `
  font-size: 15px;
`