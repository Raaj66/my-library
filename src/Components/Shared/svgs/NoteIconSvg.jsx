import React from 'react';
import PropTypes from 'prop-types';

const NoteIconSvg = ({ className, ...props }) => (
  <svg {...props} className={className} width="15px" height="18px" viewBox="0 0 15 18" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
    <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
      <path d="M1,0.75 C0.861928813,0.75 0.75,0.861928813 0.75,1 L0.75,17 C0.75,17.1380712 0.861928813,17.25 1,17.25 L14,17.25 C14.1380712,17.25 14.25,17.1380712 14.25,17 L14.25,5.03148495 C14.25,4.96734312 14.2253464,4.90565505 14.1811388,4.85918075 L10.3462797,0.827695805 C10.2990878,0.77808421 10.2336127,0.75 10.1651409,0.75 L1,0.75 Z" id="Rectangle" stroke="#2CA8E2" strokeWidth="1.5" />
      <polyline stroke="#2CA8E2" points="8.71587506 0.600000024 8.71587506 5.80012167 12.5669625 5.80012167" />
    </g>
  </svg>
);

export default NoteIconSvg;

NoteIconSvg.propTypes = {
  className: PropTypes.string,
};

NoteIconSvg.defaultProps = {
  className: '',
};
