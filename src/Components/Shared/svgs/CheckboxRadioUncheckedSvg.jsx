import React from 'react';
import PropTypes from 'prop-types';

const CheckboxRadioUncheckedSvg = ({ className, ...props }) => (
  <svg {...props} className={className} width="20px" height="20px" viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg">
    <title>Unselected - LG</title>
    <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
      <circle stroke="#A7B4BC" fill="#FFFFFF" cx="10" cy="10" r="9.5" />
    </g>
  </svg>
);

export default CheckboxRadioUncheckedSvg;

CheckboxRadioUncheckedSvg.propTypes = {
  className: PropTypes.string,
};

CheckboxRadioUncheckedSvg.defaultProps = {
  className: '',
};
