import React from "react";
import { shallow } from "enzyme";
import Form from "./Form";

describe("Form component", () => {
  it("should fail if no credentials are provided", () => {
    const fakeEvent = { preventDefault: () => console.log("preventDefault") };
    const form = shallow(<Form />);
    expect(form.length).toBe(1);
    form.simulate("submit", fakeEvent);
  });
});
