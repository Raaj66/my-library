import React from 'react';
import PropTypes from 'prop-types';

const CheckboxRadioCheckedSvg = ({ className, ...props }) => (
  <svg {...props} className={className} width="20px" height="20px" viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg">
    <title>Selected - LG</title>
    <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
      <circle stroke="#2E4250" fill="#FFFFFF" cx="10" cy="10" r="9.5" />
      <circle stroke="#000000" fill="#000000" cx="10" cy="10" r="4.5" />
    </g>
  </svg>
);

export default CheckboxRadioCheckedSvg;

CheckboxRadioCheckedSvg.propTypes = {
  className: PropTypes.string,
};

CheckboxRadioCheckedSvg.defaultProps = {
  className: '',
};
