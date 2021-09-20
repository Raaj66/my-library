import React from 'react';
import cx from 'classnames';
import { TestComponentProps } from './TestComponent.types';

import styles from './TestComponent.scss';

const TestComponent: React.FC<TestComponentProps> = ({ theme }) => (
  <div data-testid="test-component" className={cx(styles[`test-component-${theme}`], styles['test-component'])}>
    <h1 className={styles.heading}>iCapital Network</h1>
    <h2>I am the test component in @icapitalnetwork/react-component-library</h2>
    <div className={styles.footer}>
      <h6>Version 2.0.4</h6>
      <h5>iCapital Network 2021</h5>
    </div>
  </div>
);

export default TestComponent;
