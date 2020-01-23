import * as React from "react";
import renderer from "react-test-renderer";

import AirportSummary from "./airport-summary";

describe("<AirportSummary /> component", () => {
  test("renders the airport information", () => {
    const airport = renderer
      .create(
        <AirportSummary
          code="BEK"
          name="Rae Bareli"
          city="Rae Bareli City"
          country="India"
          region="Asia"
        />,
      )
      .toJSON();

    expect(airport).toMatchSnapshot();
  });
});
