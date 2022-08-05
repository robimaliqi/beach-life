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

import "@tomtom-international/web-sdk-maps/dist/maps.css";
import * as tt from "@tomtom-international/web-sdk-maps";
const beaches = require('./beachList')

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
        height: 20
      }).setLngLat([beach.long, beach.lat]).addTo(map1);
      let popup = new tt.Popup({
        closeButton: false,
        anchor: "bottom",
        offset: 20
      })
        .setHTML(beach.name);
      marker.setPopup(popup);
      setMap(map1);
      return () => map1.remove();
    });
  }, []);

  return (
    <div className="App">
      <Container className="mapContainer">
        <Row>
          <Col xs="4">
            <FormGroup>
              <Label for="longitude">Longitude</Label>
              <Input
                type="text"
                name="longitude"
                value={mapLongitude}
                onChange={(e) => setMapLongitude(e.target.value)}
              />
            </FormGroup>
            <FormGroup>
              <Label for="latitude">Latitude</Label>
              <Input
                type="text"
                name="latitude"
                value={mapLatitude}
                onChange={(e) => setMapLatitude(e.target.value)}
              />
            </FormGroup>
            <Col xs="12">
              <Row>Zoom</Row>
              <Row>
                <Button outline color="primary" onClick={decreaseZoom}>
                  -
                </Button>
                <div className="mapZoomDisplay">{mapZoom}</div>
                <Button outline color="primary" onClick={increaseZoom}>
                  +
                </Button>
              </Row>
            </Col>
            <Col xs="12">
              <Row className="updateButton">
                <Button color="primary" onClick={updateMap}>
                  Update Map
                </Button>
              </Row>
            </Col>
          </Col>
          <Col xs="8">
            <div ref={mapElement} className="mapDiv" />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Map;