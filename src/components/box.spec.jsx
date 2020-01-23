import * as React from "react";
import renderer from "react-test-renderer";
import { shallow } from "enzyme";

import Box from "./box";

describe("<Box /> component", () => {
  test("renders the provided component", () => {
    const box = renderer.create(<Box>FOO!</Box>).toJSON();

    expect(box).toMatchSnapshot();
  });

  test("attaches the provided CSS classes to the DOM", () => {
    const message = shallow(<Box className="foo">Bar!</Box>);

    expect(message.hasClass("foo")).toEqual(true);
  });
});
