import React from 'react';
import cx from 'classnames';
import { TestComponentProps } from './TestComponent.types';

import styles from './TestComponent.module.scss';

const TestComponent: React.FC<TestComponentProps> = ({ theme }) => (
  <div data-testid="test-component" className={cx(styles[`test-component-${theme}`], styles['test-component'])}>
    <h1 className={styles.heading}>iCapital Network</h1>
    <h2>I am the test component in @icapitalnetwork/react-component-library</h2>
    <div className={styles.footer}>
      <h6>Version 2.0.4</h6>
      <h5>iCapital Network 2021</h5>
    </div>
    <br />
    <br />
    <div>
      <h1>Custom Fonts</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam quod assumenda, consequuntur quisquam aperiam,
        ullam laboriosam temporibus expedita nemo perferendis ratione tenetur itaque optio, quae fugiat ipsam
        architecto. Dolorum quod consequatur libero enim! Et ipsum eaque molestiae. Dicta, fuga! Tenetur voluptatibus
        repellendus quo, rem velit labore repellat debitis a commodi!
      </p>
    </div>

    <div>
      <br />
      <h1>Custom Fonts</h1>
      <div style={{ fontSize: 22 }}>
        <i className="fas fa-home" /> <span>Home</span>
      </div>

      <div style={{ fontSize: 22 }}>
        <i className="fas fa-rocket" /> <span>Explore</span>
      </div>
    </div>

    <div style={{ paddingBottom: 100 }}>
      <br />
      <h1>Custom Image</h1>
      <div style={{ fontSize: 22 }}>
        <img src="/img/callDataNode.png" alt="" />
      </div>
    </div>
  </div>
);

export default TestComponent;
