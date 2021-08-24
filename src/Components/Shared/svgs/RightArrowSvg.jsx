import React from 'react';
import PropTypes from 'prop-types';

const RightArrowSvg = ({ className, ...props }) => (
  <svg
    className={className}
    width="16px"
    height="16px"
    viewBox="0 0 7 16"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    xlink="http://www.w3.org/1999/xlink"
    {...props}
  >
    <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
      <g transform="translate(-72.000000, -498.000000)" fill="#2E4250">
        <g transform="translate(48.000000, 482.000000)">
          <polygon
            transform="translate(27.500000, 23.633141) scale(-1, 1) rotate(-450.000000) translate(-27.500000, -23.633141) "
            points="20.0212175 26.3409939 27.3668593 20.1331407 34.9787825 26.3409939 33.4552759 27.1331407 27.3668593 22.015468 21.3678002 27.1331407"
          />
        </g>
      </g>
    </g>
  </svg>
);

export default RightArrowSvg;

RightArrowSvg.propTypes = {
  className: PropTypes.string,
};

RightArrowSvg.defaultProps = {
  className: null,
};
