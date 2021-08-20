import React from "react";

import { TestComponentProps } from "./TestComponent.types";

import "./TestComponent.scss";

const TestComponent: React.FC<TestComponentProps> = ({ theme }) => (
  <div
    data-testid="test-component"
    className={`test-component test-component-${theme}`}
  >
    <h1 className="heading">I'm the test component</h1>
    <h2>ICapital Network</h2>
    <h1 className="heading">Version-3</h1>
    <h2>ICapital Network-V3</h2>
  </div>
);

export default TestComponent;
