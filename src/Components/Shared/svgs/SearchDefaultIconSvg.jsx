import React from 'react';
import PropTypes from 'prop-types';

const SearchDefaultIconSvg = ({ className, ...props }) => (
  <svg {...props} className={className} version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="22px" height="22px" viewBox="0 0 22 22" xmlSpace="preserve">
    <style type="text/css">
      {
        '.st0{display:none;}\
        .st1{display:inline;fill-rule:evenodd;clip-rule:evenodd;}\
        .st2{display:inline;fill-rule:evenodd;clip-rule:evenodd;fill:#2CA8E2;}\
        .st3{fill - rule:evenodd;clip-rule:evenodd;fill:#738794;}'
      }
    </style>
    <g className="st0">
      <path
        className="st1"
        d="M21.2,19.8l-3.5-3.5c1.4-1.7,2.3-3.9,2.3-6.3c0-5.5-4.5-10-10-10C4.5,0,0,4.5,0,10s4.5,10,10,10
        c2.4,0,4.6-0.8,6.3-2.3l3.5,3.5c0.4,0.4,1,0.4,1.4,0C21.6,20.8,21.6,20.2,21.2,19.8z M10,18.5c-4.7,0-8.5-3.8-8.5-8.5
        S5.3,1.5,10,1.5c4.7,0,8.5,3.8,8.5,8.5S14.7,18.5,10,18.5z"
      />
    </g>
    <g className="st0">
      <path
        className="st2"
        d="M21.7,19.8l-3.5-3.5c1.4-1.7,2.3-3.9,2.3-6.3c0-5.5-4.5-10-10-10C5,0,0.5,4.5,0.5,10s4.5,10,10,10
        c2.4,0,4.6-0.8,6.3-2.3l3.5,3.5c0.4,0.4,1,0.4,1.4,0C22.1,20.8,22.1,20.2,21.7,19.8z M10.5,18.5C5.8,18.5,2,14.7,2,10
        s3.8-8.5,8.5-8.5c4.7,0,8.5,3.8,8.5,8.5S15.2,18.5,10.5,18.5z"
      />
    </g>
    <g>
      <path
        className="st3"
        d="M21.7,19.8l-3.5-3.5c1.4-1.7,2.3-3.9,2.3-6.3c0-5.5-4.5-10-10-10C5,0,0.5,4.5,0.5,10s4.5,10,10,10
        c2.4,0,4.6-0.8,6.3-2.3l3.5,3.5c0.4,0.4,1,0.4,1.4,0C22.1,20.8,22.1,20.2,21.7,19.8z M10.5,18.5C5.8,18.5,2,14.7,2,10
        s3.8-8.5,8.5-8.5c4.7,0,8.5,3.8,8.5,8.5S15.2,18.5,10.5,18.5z"
      />
    </g>
  </svg>
);

export default SearchDefaultIconSvg;

SearchDefaultIconSvg.propTypes = {
  className: PropTypes.string,
};

SearchDefaultIconSvg.defaultProps = {
  className: '',
};
