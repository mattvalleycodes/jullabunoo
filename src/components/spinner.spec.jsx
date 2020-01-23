import * as React from "react";
import renderer from "react-test-renderer";

import Spinner from "./spinner";

describe("<Spinner /> component", () => {
  test("renders a spinner", () => {
    const spinner = renderer.create(<Spinner />).toJSON();

    expect(spinner).toMatchSnapshot();
  });
});
