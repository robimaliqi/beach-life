import { useEffect, useState, useRef } from "react";
import "@tomtom-international/web-sdk-maps/dist/maps.css";
import * as tt from "@tomtom-international/web-sdk-maps";

export const SmallMap = (props) => {
  const mapElement = useRef();
  const [map, setMap] = useState({});

  useEffect(() => {
    let map = tt.map({
      key: ttApiKey,
      container: mapElement.current,
      center: [props.long, props.lat],
      zoom: 15,
    });

    var element = document.createElement("div");
    element.id = "marker";
    let marker = new tt.Marker({
      element: element,
    })
      .setLngLat([props.long, props.lat])
      .addTo(map);
    setMap(map);
    return () => map.remove();
  }, []);

  return (
    <div>
      <div ref={mapElement} className="small-map" />
    </div>
  );
};
