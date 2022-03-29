import Enzyme from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import * as React from "react";
import App from "../components/App";

Enzyme.configure({ adapter: new Adapter() });

it("app-content container should be defined", () => {
  const wrapper = Enzyme.mount(<App />, {
    attachTo: document.createElement("div"),
  });

  expect(wrapper.find(".app-content").exists()).toBe(true);
});
