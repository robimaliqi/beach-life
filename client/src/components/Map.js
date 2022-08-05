import * as React from "react";
import { useState, useEffect, useRef } from "react";
import {
  Container,
  Row,
  Col,
  Button,
  FormGroup,
  Label,
  Input,
} from "reactstrap";
import { Link } from "react-router-dom";

import "@tomtom-international/web-sdk-maps/dist/maps.css";
import * as tt from "@tomtom-international/web-sdk-maps";
const beaches = require("./beachList");

const ttApiKey = require("../tt-api-key");

const MAX_ZOOM = 17;

function Map() {
  const mapElement = useRef();
  const [mapLongitude, setMapLongitude] = useState(-1.4582515931151268);
  const [mapLatitude, setMapLatitude] = useState(53.39687281540704);
  const [mapZoom, setMapZoom] = useState(5);
  const [map, setMap] = useState({});

  const increaseZoom = () => {
    if (mapZoom < MAX_ZOOM) {
      setMapZoom(mapZoom + 1);
    }
  };

  const decreaseZoom = () => {
    if (mapZoom > 1) {
      setMapZoom(mapZoom - 1);
    }
  };

  const updateMap = () => {
    map.setCenter([parseFloat(mapLongitude), parseFloat(mapLatitude)]);
    map.setZoom(mapZoom);
  };

  useEffect(() => {
    let map1 = tt.map({
      key: ttApiKey,
      container: mapElement.current,
      center: [mapLongitude, mapLatitude],
      zoom: mapZoom,
    });

    beaches.forEach((beach) => {
      let marker = new tt.Marker({
        width: 20,
        height: 20,
      })
        .setLngLat([beach.long, beach.lat])
        .addTo(map1);
      let popup = new tt.Popup({
        closeButton: false,
        anchor: "bottom",
        offset: 20,
      }).setHTML(`<a href="/beaches/${beach._id}"> ${beach.name}</a>`);
      marker.setPopup(popup);
      setMap(map1);
      return () => map1.remove();
    });
  }, []);

  return (
    <div className="map">
      <div className="mapContainer">
        <div ref={mapElement} className="mapDiv" />
      </div>
    </div>
  );
}

export default Map;
