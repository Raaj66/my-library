import React from 'react';
import PropTypes from 'prop-types';

const CheckboxPartialSvg = ({ className, ...props }) => (
  <svg {...props} className={className} xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
    <g data-name="Group 1058" transform="translate(1141.448 -53.834)">
      <g data-name="Checkbox - Not active">
        <g data-name="Rectangle 56">
          <g data-name="Group 1059">
            <rect data-name="Rectangle 236" width="20" height="20" transform="translate(-1141.448 53.834)" fill="#fff" />
          </g>
          <g data-name="Group 1060">
            <path data-name="Path 583" d="M-1121.448,73.834h-20v-20h20Zm-19-1h18v-18h-18Z" fill="#2e4250" />
          </g>
        </g>
      </g>
      <g data-name="Rectangle 58">
        <rect data-name="Rectangle 237" width="12" height="3" transform="translate(-1137.448 62.134)" fill="#2e4250" />
      </g>
    </g>
  </svg>
);

export default CheckboxPartialSvg;

CheckboxPartialSvg.propTypes = {
  className: PropTypes.string,
};

CheckboxPartialSvg.defaultProps = {
  className: '',
};
