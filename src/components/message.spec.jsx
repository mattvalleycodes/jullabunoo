import * as React from "react";
import renderer from "react-test-renderer";
import { shallow } from "enzyme";

import Message from "./message";

describe("<Message /> component", () => {
  test("by default, renders in info mode", () => {
    const message = shallow(<Message title="Hello, world!" />);

    expect(message.hasClass("message--info")).toEqual(true);
  });

  test("renders error messages in error mode", () => {
    const message = shallow(<Message type="error" title="Hello, world!" />);

    expect(message.hasClass("message--error")).toEqual(true);
  });

  test("renders the message information", () => {
    const message = renderer
      .create(<Message type="error" title="Hello, World!" />)
      .toJSON();

    expect(message).toMatchSnapshot();
  });
});
