import React from 'react';
import PropTypes from 'prop-types';

const ExceptionSvg = ({ className, ...props }) => (
  <svg {...props} className={className} width="24px" height="24px" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
    <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
      <g transform="translate(-798.000000, -3966.000000)">
        <g transform="translate(584.000000, 3954.000000)">
          <g transform="translate(16.000000, 12.000000)">
            <g transform="translate(198.000000, 0.000000)">
              <rect fill="#CC2718" x="0" y="0" width="24" height="24" rx="4.5" />
              <text fontFamily="AvenirNextLTPro-Bold, Avenir Next LT Pro" fontSize="16.5" fontWeight="bold" fill="#FFFFFF">
                <tspan x="5.9845" y="17.5">E</tspan>
              </text>
            </g>
          </g>
        </g>
      </g>
    </g>
  </svg>
);

export default ExceptionSvg;

ExceptionSvg.propTypes = {
  className: PropTypes.string,
};

ExceptionSvg.defaultProps = {
  className: '',
};
