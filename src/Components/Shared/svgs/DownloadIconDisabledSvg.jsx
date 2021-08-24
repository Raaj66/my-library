import React from 'react';
import PropTypes from 'prop-types';

const DownloadIconDisabledSvg = ({ className, ...props }) => (
  <svg {...props} className={className} width="18px" height="18px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18">
    <rect data-name="download-icon_disabled background" width="18" height="18" fill="rgba(0,0,0,0)" />
    <g data-name="download-icon_16x18 copy 4">
      <rect data-name="download bar" width="18" height="1.35" rx="0.3" transform="translate(0 16.65)" fill="#d6e1e8" />
      <path data-name="download arrow" d="M.1,9.555a.277.277,0,0,1,0-.426l1.124-1a.368.368,0,0,1,.477,0l4.452,3.956V.3a.3.3,0,0,1,.3-.3h1.03a.3.3,0,0,1,.3.3V12.086l4.654-3.958a.368.368,0,0,1,.478.009l1.062.987a.277.277,0,0,1-.009.423L6.944,15.586Z" transform="translate(2.245)" fill="#d6e1e8" />
    </g>
  </svg>
);

export default DownloadIconDisabledSvg;

DownloadIconDisabledSvg.propTypes = {
  className: PropTypes.string,
};

DownloadIconDisabledSvg.defaultProps = {
  className: '',
};
