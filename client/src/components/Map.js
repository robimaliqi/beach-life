import * as React from "react";
import { useState, useEffect, useRef } from "react";
import "@tomtom-international/web-sdk-maps/dist/maps.css";
import * as tt from "@tomtom-international/web-sdk-maps";
const beachList = require("./beachList");

function Map() {
  const mapElement = useRef();
  const [mapLongitude, setMapLongitude] = useState(-1.4582515931151268);
  const [mapLatitude, setMapLatitude] = useState(53.39687281540704);
  const [mapZoom, setMapZoom] = useState(5.5);
  const [map, setMap] = useState({});
  const [beaches, setBeaches] = useState(beachList);

  useEffect(() => {
    let map1 = tt.map({
      key: process.env.ttApiKey,
      container: mapElement.current,
      center: [mapLongitude, mapLatitude],
      zoom: mapZoom,
    });

    beaches.forEach((beach) => {
      var element = document.createElement("div");
      element.id = "marker";
      let marker = new tt.Marker({
        element: element,
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
    <div className="mapContainer">
      <div ref={mapElement} className="mapDiv" />
    </div>
  );
}

export default Map;
