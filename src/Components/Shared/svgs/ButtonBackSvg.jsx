import React from 'react';
import PropTypes from 'prop-types';

const ButtonBackSvg = ({ className, ...props }) => (
  <svg className={className} width="21px" height="21px" viewBox="0 0 21 21" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" {...props}>
    <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
      <g transform="translate(-50.000000, -127.000000)">
        <g transform="translate(50.000000, 127.000000)">
          <g>
            <circle fill="#2CA8E2" cx="10.5" cy="10.5" r="10.5" />
            <g transform="translate(7.000000, 7.000000)">
              <rect fill="#FFFFFF" transform="translate(5.001424, 3.500000) rotate(-90.000000) translate(-5.001424, -3.500000) " x="4.50142415" y="-0.5" width="1" height="8" />
              <path d="M-1.5,5 L1.5,2 C1.5,2 4.5,5 4.5,5" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="square" transform="translate(1.500000, 3.500000) rotate(-450.000000) translate(-1.500000, -3.500000) " />
            </g>
          </g>
        </g>
      </g>
    </g>
  </svg>
);

ButtonBackSvg.propTypes = {
  className: PropTypes.string,
};

ButtonBackSvg.defaultProps = {
  className: '',
};

export default ButtonBackSvg;
