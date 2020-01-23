import React from "react";
import sinon from "sinon";
import { mount } from "enzyme";
import Data from "./data";

describe("<Data /> component", () => {
  let fetch;
  let storage;
  const sandbox = sinon.createSandbox();
  const url = "foo.com/users";
  const users = [{ name: "Matt" }, { name: "Kartik" }];

  beforeEach(() => {
    fetch = sandbox.stub().resolves({ json: sandbox.stub().returns(users) });
    storage = {
      setItem: sandbox.stub(),
      getItem: sandbox.stub(),
    };
  });

  afterEach(() => {
    sandbox.restore();
  });

  test("initially, renders child without any data or error", () => {
    const child = sandbox.stub().returns("foo");
    mount(
      <Data url={url} fetch={fetch} storage={storage}>
        {child}
      </Data>,
    );

    process.nextTick(() => {
      expect(child.firstCall.args).toEqual([null, null]);
    });
  });

  test("after data fetching, re-renders with the fetched data", () => {
    const child = sandbox.stub().returns("foo");
    mount(
      <Data url={url} fetch={fetch} storage={storage}>
        {child}
      </Data>,
    );

    process.nextTick(() => {
      expect(child.secondCall.args).toEqual([users, null]);
    });
  });

  test("when data fetching fails, it returns the error", () => {
    const err = new Error("foo");
    const child = sandbox.stub().returns("foo");

    fetch.rejects(err);
    mount(
      <Data url={url} fetch={fetch} storage={storage}>
        {child}
      </Data>,
    );

    process.nextTick(() => {
      expect(child.secondCall.args).toEqual([null, err.message]);
    });
  });

  test("resolves provided function URLs before doing HTTP requests", () => {
    const fn = sandbox.stub().returns(url);
    const child = () => "";

    mount(
      <Data url={fn} fetch={fetch} storage={storage}>
        {child}
      </Data>,
    );

    process.nextTick(() => {
      expect(fn.callCount).toEqual(1);
    });
  });

  test("uses the provided fetch API to do the HTTP request", () => {
    mount(
      <Data url={url} fetch={fetch} storage={storage}>
        {() => ""}
      </Data>,
    );

    process.nextTick(() => {
      expect(fetch.callCount).toEqual(1);
      expect(fetch.firstCall.args).toEqual([url]);
    });
  });

  test("uses cache strategy to cache data", () => {
    const cacheKey = "foo";
    const cacheValue = { foo: "bar" };
    const cache = sandbox.stub().returns([[cacheKey, cacheValue]]);

    mount(
      <Data url={url} cache={cache} fetch={fetch} storage={storage}>
        {() => ""}
      </Data>,
    );

    process.nextTick(() => {
      expect(cache.callCount).toEqual(1);
      expect(cache.firstCall.args).toEqual([users]);
    });
  });

  test("uses the provided transform strategy to transform data", () => {
    const transform = sandbox.stub().returns([]);

    mount(
      <Data url={url} transform={transform} fetch={fetch} storage={storage}>
        {() => ""}
      </Data>,
    );

    process.nextTick(() => {
      expect(transform.callCount).toEqual(1);
      expect(transform.firstCall.args).toEqual([users]);
    });
  });

  test("always passes down the transformed data", () => {
    const transformedData = [users[0].name, users[1].name];
    const child = sandbox.stub().returns("");
    const transform = sandbox.stub().returns(transformedData);

    mount(
      <Data url={url} transform={transform} fetch={fetch} storage={storage}>
        {child}
      </Data>,
    );

    process.nextTick(() => {
      expect(child.secondCall.args).toEqual([transformedData, null]);
    });
  });
});
