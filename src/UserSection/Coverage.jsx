import React, { useEffect, useState } from "react";
import AddLocationIcon from "@mui/icons-material/AddLocation";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import instance from "../Axios/instance";
import L from "leaflet";

const Coverage = () => {
  const [coverageAreas, setCoverageAreas] = useState([]);
  const defaultPosition = [23.8103, 90.4125]; // Dhaka default center

  useEffect(() => {
    instance
      .get("/coverage")
      .then((res) => {
        setCoverageAreas(res.data || []);
      })
      .catch((err) => console.log(err));
  }, []);

  const customIcon = new L.Icon({
    iconUrl: "https://cdn-icons-png.flaticon.com/512/684/684908.png",
    iconSize: [25, 25],
  });

  return (
    <div className="px-3 md:px-15 py-4">
      <h1 className="text-center font-bold text-xl py-3 flex items-center justify-center gap-2">
        <AddLocationIcon className="text-[#748603] animate-[blink_2s_infinite]" />
        <span className="text-[#f75408]">Coverage Area</span>
      </h1>

      <div className="h-[500px] w-full rounded-lg overflow-hidden shadow-lg">
        <MapContainer
          center={defaultPosition}
          zoom={8}
          scrollWheelZoom={false}
          className="h-full "
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />

          {coverageAreas.map((district, index) =>
            (district.coverage || []).map((area, i) => (
              <Marker
                key={`${index}-${i}`}
                position={[area.latitude, area.longitude]}
                icon={customIcon}
              >
                <Popup>
              
                  <strong>{area["coverage-area"]}</strong>
                  <br />
                  Lat: {area.latitude}, Lon: {area.longitude}
                  <br />
                  District: {district.district}
                </Popup>
              </Marker>
            ))
          )}
        </MapContainer>
      </div>

      <style>{`
        @keyframes blink {
          0%, 50%, 100% { opacity: 1; }
          25%, 75% { opacity: 0; }
        }
      `}</style>
    </div>
  );
};

export default Coverage;