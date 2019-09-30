import React from "react";
import renderer from "react-test-renderer";
import WeatherApp from "./WeatherApp";

describe("WeatherApp", () => {
  test("snapshot renders", () => {
    const component = renderer.create(<WeatherApp />);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
