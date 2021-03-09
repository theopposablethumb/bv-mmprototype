import { useContext, useEffect } from "react";
import MapContext from "./MapContext";
import OLTileLayer from "ol/layer/Tile";

const TileLayer = ({ source, zIndex = 0 }) => {
    const { map } = useContext(MapContext); 
    
    useEffect(() => {
        if (!map) return;
    
        let tileLayer = new OLTileLayer({
            source,
            zIndex,
            maxZoom: 14,
            minZoom: 9
        });
    
        map.addLayer(tileLayer);
        tileLayer.setZIndex(zIndex);
        
        return () => {
            if (map) {
                map.removeLayer(tileLayer);
            }
        };
    }, [map]);
    
    return null;

};

export default TileLayer;