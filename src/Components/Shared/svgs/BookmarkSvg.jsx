import React from 'react';
import PropTypes from 'prop-types';

const BookmarkSvg = ({ className, ...props }) => (
  <svg className={className} width="12px" height="16px" viewBox="0 0 12 16" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" {...props}>
    <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
      <g transform="translate(-134.000000, -388.000000)" fill="currentColor">
        <g transform="translate(134.000000, 385.000000)">
          <path d="M2,3 L10,3 C11.1045695,3 12,3.8954305 12,5 L12,19 L12,19 L6,15.8 L0,19 L0,5 C-1.3527075e-16,3.8954305 0.8954305,3 2,3 Z" />
        </g>
      </g>
    </g>
  </svg>
);

export default BookmarkSvg;

BookmarkSvg.propTypes = {
  className: PropTypes.string,
};

BookmarkSvg.defaultProps = {
  className: '',
};
