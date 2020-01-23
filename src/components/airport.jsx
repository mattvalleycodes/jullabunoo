import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { Link } from "@reach/router";
import moment from "moment-timezone";
import Box from "./box";

const Data = ({ title, value }) => (
  <div className="data">
    <b className="data__title">{title}:</b>
    <span>{value}</span>
  </div>
);

Data.propTypes = {
  title: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
};

const Airport = (props) => (
  <Box className="airport">
    <Fragment>
      <Data title="Code" value={props.code} />
      <Data title="Name" value={props.name} />
      <Data title="City" value={props.city} />
      <Data title="Country" value={props.country} />
      <Data title="Region" value={props.region} />
      <Data
        title="Local time"
        value={moment()
          .tz(props.timezone)
          .format("dddd, MMMM Do YYYY, h:mm:ss a")}
      />
      <br />
      <Link to="/">Back</Link>
    </Fragment>
  </Box>
);

Airport.propTypes = {
  code: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
  country: PropTypes.string.isRequired,
  region: PropTypes.string.isRequired,
  timezone: PropTypes.string.isRequired,
};

export default Airport;
