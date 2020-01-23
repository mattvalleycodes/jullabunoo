import React from "react";
import PropTypes from "prop-types";
import Data from "../components/data";
import Airport from "../components/airport";
import Message from "../components/message";
import Spinner from "../components/spinner";

const AirportApp = ({ id }) => (
  <Data resolve={() => `airport-${id}`}>
    {(data, error) => {
      if (error) {
        const title =
          error === "ERROR_UNRESOLVABLE_DATA"
            ? `Unable to fetch data for ${id}. Go back to home page!`
            : error;

        return <Message type="error" title={title} />;
      }

      if (!data) return <Spinner />;

      return (
        <Airport
          code={data.code}
          name={data.name}
          city={data.city}
          country={data.country}
          region={data.region}
          timezone={data.timezone}
        />
      );
    }}
  </Data>
);

AirportApp.propTypes = {
  id: PropTypes.string,
};

AirportApp.defaultProps = {
  id: null,
};

export default AirportApp;
