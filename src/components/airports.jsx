import React from "react";
import PropTypes from "prop-types";
import AirportSummary from "./airport-summary";
import Box from "./box";

const Airports = (props) => (
  <ul className="airports">
    {props.airports.map((airport) => (
      <li key={airport.code} className="airports__summary">
        <Box>
          <AirportSummary
            code={airport.code}
            name={airport.name}
            city={airport.city}
            region={airport.region}
            country={airport.country}
          />
        </Box>
      </li>
    ))}
  </ul>
);

Airports.propTypes = {
  airports: PropTypes.arrayOf(
    PropTypes.shape({
      code: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      city: PropTypes.string.isRequired,
      country: PropTypes.string.isRequired,
      region: PropTypes.string.isRequired,
      timezone: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
};

export default Airports;
