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
import styled from "styled-components";
import "@tomtom-international/web-sdk-maps/dist/maps.css";
import * as tt from "@tomtom-international/web-sdk-maps";
const beachList = require("./beachList");
const ttApiKey = require("../tt-api-key");

const Main = styled("div")`
  font-family: sans-serif;
  background: #f0f0f0;
  height: 100vh;
`;

const DropDownContainer = styled("div")`
  width: 10.5em;
  margin: 0 auto;
`;

const DropDownHeader = styled("div")`
  margin-bottom: 0.8em;
  padding: 0.4em 2em 0.4em 1em;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.15);
  font-weight: 500;
  font-size: 1.3rem;
  color: #3faffa;
  background: #ffffff;
`;

const DropDownListContainer = styled("div")``;

const DropDownList = styled("ul")`
  padding: 0;
  margin: 0;
  padding-left: 1em;
  background: #ffffff;
  border: 2px solid #e5e5e5;
  box-sizing: border-box;
  color: #3faffa;
  font-size: 1.3rem;
  font-weight: 500;
  &:first-child {
    padding-top: 0.8em;
  }
`;

const ListItem = styled("li")`
  list-style: none;
  margin-bottom: 0.8em;
`;

const options = ["Sussex", "Cornwall", "Devon"];

const MAX_ZOOM = 17;

function Map() {
  const mapElement = useRef();
  const [mapLongitude, setMapLongitude] = useState(-1.4582515931151268);
  const [mapLatitude, setMapLatitude] = useState(53.39687281540704);
  const [mapZoom, setMapZoom] = useState(5);
  const [map, setMap] = useState({});
  const [beaches, setBeaches] = useState(beachList);

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
    <div>
      <div className="map">
        <div className="mapContainer">
          <div ref={mapElement} className="mapDiv" />
        </div>
      </div>
    </div>
  );
}

export default Map;
