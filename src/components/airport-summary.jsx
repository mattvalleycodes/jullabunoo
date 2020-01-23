import React from "react";
import { Link } from "@reach/router";
import PropTypes from "prop-types";

const AirportSummary = (props) => (
  <Link to={`/airport/${props.code}`} className="airport-summary">
    <h1 className="airport-summary__name">{props.name}</h1>
    <span className="airport-summary__code">{props.code}</span>
    <span className="airport-summary__location">
      {props.city}, {props.country} -- {props.region}
    </span>
  </Link>
);

AirportSummary.propTypes = {
  code: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
  country: PropTypes.string.isRequired,
  region: PropTypes.string.isRequired,
};

export default AirportSummary;
