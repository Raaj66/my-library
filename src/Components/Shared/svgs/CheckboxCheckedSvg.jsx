import React from 'react';
import PropTypes from 'prop-types';

const CheckboxCheckedSvg = ({ className, ...props }) => (
  <svg {...props} className={className} xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
    <g fill="#fff" stroke="#a2baca" strokeMiterlimit="10" strokeWidth="1">
      <rect width="20" height="20" stroke="none" />
      <rect x="0.5" y="0.5" width="19" height="19" fill="none" />
    </g>
    <g data-name="Checkbox-checked" transform="translate(4)">
      <g data-name="checkbox" transform="translate(-4)" fill="#fff" stroke="#2e4250" strokeMiterlimit="10" strokeWidth="1">
        <rect width="20" height="20" stroke="none" />
        <rect x="0.5" y="0.5" width="19" height="19" fill="none" />
      </g>
      <path d="M4.758,10.227.191,5.687a.729.729,0,0,1,0-.984L1.2,3.719A.61.61,0,0,1,1.682,3.5a.7.7,0,0,1,.506.219L5.25,6.781,11.812.219A.7.7,0,0,1,12.318,0,.61.61,0,0,1,12.8.219l1.012.984A.666.666,0,0,1,14,1.7a.666.666,0,0,1-.191.492L5.742,10.227a.663.663,0,0,1-.984,0Z" transform="translate(-0.986 4.527)" />
    </g>
  </svg>
);

export default CheckboxCheckedSvg;

CheckboxCheckedSvg.propTypes = {
  className: PropTypes.string,
};

CheckboxCheckedSvg.defaultProps = {
  className: '',
};
