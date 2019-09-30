import React from "react";
import { shallow } from "enzyme";
import Form from "./Form";

describe("Form component", () => {
  it("submit works", () => {
    const fakeEvent = { preventDefault: () => console.log("preventDefault") };
    const form = shallow(<Form />);
    expect(form.length).toBe(1);
    form.simulate("submit", fakeEvent);
  });
});
