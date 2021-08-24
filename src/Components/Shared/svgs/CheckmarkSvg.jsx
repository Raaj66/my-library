import React from 'react';
import PropTypes from 'prop-types';

const CheckmarkSvg = ({ className, ...props }) => (
  <svg className={className} width="14px" height="10px" viewBox="0 0 14 10" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" {...props}>
    <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
      <g transform="translate(-426.000000, -885.000000)" fill="#089051" fillRule="nonzero">
        <path d="M431.585944,894.890625 C431.781257,894.890625 431.97657,894.8125 432.117195,894.671875 L438.835953,887.953117 C438.976578,887.812491 439.054703,887.617179 439.054703,887.421866 C439.054703,887.226553 438.976578,887.031241 438.835953,886.890615 L437.773452,885.828114 C437.632826,885.687489 437.437514,885.609364 437.242201,885.609364 C437.046888,885.609364 436.851575,885.687489 436.71095,885.828114 L431.585944,890.960933 L429.289066,888.656242 C429.148441,888.515617 428.953129,888.437492 428.757816,888.437492 C428.562503,888.437492 428.36719,888.515617 428.226565,888.656242 L427.164064,889.718744 C427.023439,889.859369 426.945314,890.054682 426.945314,890.249994 C426.945314,890.445307 427.023439,890.64062 427.164064,890.781245 L431.054694,894.671875 C431.195319,894.8125 431.390631,894.890625 431.585944,894.890625 Z" />
      </g>
    </g>
  </svg>
);

export default CheckmarkSvg;

CheckmarkSvg.propTypes = {
  className: PropTypes.string,
};

CheckmarkSvg.defaultProps = {
  className: '',
};