import React from 'react';
import PropTypes from 'prop-types';

const DeleteCircleIconSvg = ({ className, ...props }) => (
  <svg {...props} className={className} width="26px" height="26px" viewBox="0 0 26 26" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
    <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
      <g transform="translate(1.000000, 1.000000)">
        <g>
          <g>
            <circle stroke="#2CA8E2" cx="12" cy="12" r="12" />
            <g transform="translate(6.000000, 6.000000)" fill="#2CA8E2">
              <polygon points="0 2.18181818 2.18181818 0 12 9.81818182 9.81818182 12" />
              <polyline points="12 2.18181818 9.81818182 0 0 9.81818182 2.18181818 12" />
            </g>
          </g>
        </g>
      </g>
    </g>
  </svg>
);

export default DeleteCircleIconSvg;

DeleteCircleIconSvg.propTypes = {
  className: PropTypes.string,
};

DeleteCircleIconSvg.defaultProps = {
  className: '',
};
