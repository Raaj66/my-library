import React from 'react';
import { string } from 'prop-types';

const ArrowDown = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="8"
    viewBox="0 0 16 8"
    className={props.className}
    data-testid="down-arrow"
  >
    <path data-name="Down arrow" d="M0,0H16L8,8Z" fill={props.fill} />
  </svg>
);

ArrowDown.defaultProps = {
  className: null,
  fill: null,
};

ArrowDown.propTypes = {
  className: string,
  fill: string,
};

export default ArrowDown;
