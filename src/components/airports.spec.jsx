import * as React from "react";
import renderer from "react-test-renderer";

import Airports from "./airports";

describe("<Airports /> component", () => {
  test("renders all of the provided airport information", () => {
    const data = [
      {
        code: "YRI",
        name: "Riviere Du Loup",
        city: "Riviere Du Loup",
        country: "Canada",
        region: "Americas",
        timezone: "America/Montreal",
      },
      {
        code: "CKG",
        name: "Chongqing",
        city: "Chonqing",
        country: "China",
        region: "Asia",
        timezone: "Asia/Shanghai",
      },
    ];

    const airports = renderer.create(<Airports airports={data} />).toJSON();

    expect(airports).toMatchSnapshot();
  });
});
