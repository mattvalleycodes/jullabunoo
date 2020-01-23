import * as React from "react";
import sinon from "sinon";
import renderer from "react-test-renderer";

import Airport from "./airport";

describe("<Airport /> component", () => {
  const sandbox = sinon.createSandbox();

  beforeEach(() => {
    // Thu Jan 23 2020 22:13:52 GMT+1100 (Australian Eastern Daylight Time)
    const now = 1579778039119;
    sandbox.useFakeTimers(now);
  });

  afterEach(() => {
    sandbox.restore();
  });

  test("renders the airport information", () => {
    const airport = renderer
      .create(
        <Airport
          code="BEK"
          name="Rae Bareli"
          city="Rae Bareli City"
          country="India"
          region="Asia"
          timezone="Australia/Sydney"
        />,
      )
      .toJSON();

    expect(airport).toMatchSnapshot();
  });
});
