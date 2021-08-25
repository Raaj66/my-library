import React from "react";

import { TestComponentProps } from "./TestComponent.types";

import "./TestComponent.scss";

const TestComponent: React.FC<TestComponentProps> = ({ theme }) => (
  <div
    data-testid="test-component"
    className={`test-component test-component-${theme}`}
  >
    <h1 className="heading">iCapital Network</h1>
    <h2>I'm the test component in {process.env.REACT_APP_NAME} </h2>
    <div className="footer">
      <h6>Version {process.env.REACT_APP_VERSION}</h6>
      <h6>iCapital Network 2021</h6>
    </div>
  </div>
);

export default TestComponent;
