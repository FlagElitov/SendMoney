import { shallow } from "enzyme";
import React from "react";
import Card from "../component/Card/Card";

const setUp = () => shallow(<Card />);

describe("Unit Testing App component", () => {
  let component;

  beforeEach(() => {
    component = setUp();
  });
  it("App Snapshot", () => {
    expect(component).toMatchSnapshot();
  });
});
