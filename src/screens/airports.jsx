import React from "react";
import Data from "../components/data";
import Spinner from "../components/spinner";
import Airports from "../components/airports";
import Message from "../components/message";
import config from "../config";

const transform = (source) =>
  source.map((raw) => ({
    code: raw.airportCode,
    name: raw.airportName,
    city: raw.city.cityName ? raw.city.cityName : "N/A",
    country: raw.country.countryName,
    region: raw.region.regionName,
    timezone: raw.city.timeZoneName,
  }));

const cache = (data) => data.map((entry) => [`airport-${entry.code}`, entry]);

const AirportsScreen = () => (
  <Data url={config.baseUrl} transform={transform} cache={cache} resolve="*">
    {(data, error) => {
      if (!data && !error) return <Spinner />;
      if (error) return <Message type="error" title={error} />;
      return <Airports airports={data} />;
    }}
  </Data>
);

export default AirportsScreen;
