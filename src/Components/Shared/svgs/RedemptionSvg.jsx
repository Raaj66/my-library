import React from 'react';
import PropTypes from 'prop-types';

const RedemptionSvg = ({ className, ...props }) => (
  <svg {...props} className={className} width="24px" height="24px" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
    <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
      <g transform="translate(-849.000000, -3704.000000)" fillRule="nonzero">
        <g transform="translate(849.000000, 3704.000000)">
          <path d="M21.1764235,0 C22.7337641,0 23.9999461,1.34531845 23.9999461,3 L23.9999461,16.4999607 C23.9999461,18.1546351 22.7337641,19.4999535 21.1764235,19.4999535 L14.8234974,19.4999535 L9.31319922,23.8921397 C8.96469649,24.1640049 8.47057141,23.8968089 8.47057141,23.4374441 L8.47057141,19.4999535 L2.82352941,19.4999535 C1.26618207,19.4999535 0,18.1546351 0,16.4999607 L0,3 C0,1.34531845 1.26618207,0 2.82352941,0 L21.1764235,0 Z" id="" fill="#EB6609" />
          <path d="M15.8272941,14.058 L13.4767059,9.9675 C14.6329412,9.5895 15.3444706,8.6715 15.3444706,7.389 C15.3444706,5.202 13.6291765,4.5 11.9011765,4.5 L8.47058824,4.5 L8.47058824,14.058 L10.6051765,14.058 L10.6051765,10.2645 L11.3421176,10.2645 L13.2861176,14.058 L15.8272941,14.058 Z M13.1971765,7.4295 C13.1971765,8.3367 12.4334682,8.56182 11.7634711,8.587804 L10.5924706,8.5905 L10.5924706,6.363 L11.7487059,6.363 C12.3967059,6.363 13.1971765,6.5385 13.1971765,7.4295 Z" id="R" fill="#FFFFFF" />
        </g>
      </g>
    </g>
  </svg>
);

export default RedemptionSvg;

RedemptionSvg.propTypes = {
  className: PropTypes.string,
};

RedemptionSvg.defaultProps = {
  className: '',
};
