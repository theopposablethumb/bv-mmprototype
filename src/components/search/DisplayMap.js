import React, { useState } from 'react';
import Map from "./map/Map";
import Layers from './map/Layers';
import TileLayer  from './map/TileLayer';
import osm from './map/osm';
import { fromLonLat } from 'ol/proj';

const DisplayMap = (props) => {
    const [center] = useState(props.coords);
    const [zoom] = useState(12);

    return (
        <>
            <Map center={fromLonLat(center)} zoom={zoom}>
                <Layers>
                    <TileLayer source={osm()} zIndex={0} />
                </Layers>
            </Map>
        </>
    );
}

export default DisplayMap;