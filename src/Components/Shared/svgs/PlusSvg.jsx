import React from 'react';
import PropTypes from 'prop-types';

const PlusSvg = ({ className, ...props }) => (
  <svg {...props} className={className} width="13px" height="13px" viewBox="0 0 13 13" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
    <g>
      <g transform="translate(-1211.000000, -139.000000)">
        <g transform="translate(1176.000000, 125.000000)">
          <g>
            <g transform="translate(35.000000, 14.000000)">
              <g>
                <g>
                  <rect x="0" y="5" width="13" height="3" />
                  <rect transform="translate(6.500000, 6.500000) rotate(90.000000) translate(-6.500000, -6.500000) " x="0" y="5" width="13" height="3" />
                </g>
              </g>
            </g>
          </g>
        </g>
      </g>
    </g>
  </svg>
);

export default PlusSvg;

PlusSvg.propTypes = {
  className: PropTypes.string,
};

PlusSvg.defaultProps = {
  className: '',
};
