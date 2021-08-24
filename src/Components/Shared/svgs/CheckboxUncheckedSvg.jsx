import React from 'react';
import PropTypes from 'prop-types';

const CheckboxUncheckedSvg = ({ className, ...props }) => (
  <svg {...props} className={className} xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
    <g className="checkbox-unchecked-20x20" fill="#fff" stroke="#a2baca" strokeMiterlimit="10" strokeWidth="1">
      <rect width="20" height="20" stroke="none" />
      <rect x="0.5" y="0.5" width="19" height="19" fill="none" />
    </g>
  </svg>
);

export default CheckboxUncheckedSvg;

CheckboxUncheckedSvg.propTypes = {
  className: PropTypes.string,
};

CheckboxUncheckedSvg.defaultProps = {
  className: '',
};
