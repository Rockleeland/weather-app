import React from "react";
import { shallow } from "enzyme";
import Title from "./Title";

describe("Title component", () => {
  it("title has weather in it", () => {
    const wrapper = shallow(<Title />);
    const text = wrapper.find("div").text();
    expect(text).toEqual("<WeatherIcon /> ");
  });
});
