import { shallow } from "enzyme";
import React from "react";
import App from "../App";

const setUp = () => shallow(<App />);

describe("Unit Testing App component", () => {
  let component;
  let instance;
  beforeEach(() => {
    component = setUp();
    instance = component.instance();
  });
  it("App Snapshot", () => {
    expect(component).toMatchSnapshot();
  });
});
