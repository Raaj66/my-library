import React from 'react';
import PropTypes from 'prop-types';

const DueTodayIconSvg = ({ className, ...props }) => (
  <svg {...props} className={className} width="12px" height="12px" viewBox="0 0 12 12" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
    <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
      <g transform="translate(-1074.000000, -432.000000)">
        <g transform="translate(1074.000000, 432.000000)">
          <circle fill="#FFFFFF" cx="6" cy="6" r="5" />
          <path d="M5.81248614,11.6249723 C9.02341599,11.6249723 11.6249723,9.02341599 11.6249723,5.81248614 C11.6249723,2.6015563 9.02341599,0 5.81248614,0 C2.6015563,0 0,2.6015563 0,5.81248614 C0,9.02341599 2.6015563,11.6249723 5.81248614,11.6249723 Z M7.15075505,8.20544003 L5.08359079,6.70310902 C5.01092098,6.64920747 4.96873815,6.56481894 4.96873815,6.47576123 L4.96873815,2.53124397 C4.96873815,2.37656599 5.09530951,2.24999464 5.24998748,2.24999464 L6.3749848,2.24999464 C6.52966278,2.24999464 6.65623413,2.37656599 6.65623413,2.53124397 L6.65623413,5.7585846 L8.14451183,6.84139909 C8.27108319,6.93279139 8.29685522,7.10857222 8.20544003,7.23514358 L7.54452242,8.14451183 C7.45310723,8.26872571 7.2773264,8.29685522 7.15075505,8.20544003 Z" id="" fill="#CC2718" fillRule="nonzero" />
        </g>
      </g>
    </g>
  </svg>
);

export default DueTodayIconSvg;

DueTodayIconSvg.propTypes = {
  className: PropTypes.string,
};

DueTodayIconSvg.defaultProps = {
  className: '',
};
