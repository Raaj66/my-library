import React from 'react';
import { string } from 'prop-types';

const ArrowUp = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="8"
    viewBox="0 0 16 8"
    className={props.className}
    data-testid="up-arrow"
  >
    <path data-name="Up arrow" d="M0,0H16L8-8Z" transform="translate(0 8)" fill={props.fill} />
  </svg>
);

ArrowUp.defaultProps = {
  className: null,
  fill: null,
};

ArrowUp.propTypes = {
  className: string,
  fill: string,
};

export default ArrowUp;
