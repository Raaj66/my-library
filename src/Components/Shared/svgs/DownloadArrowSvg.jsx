import React from 'react';
import PropTypes from 'prop-types';

const DownloadArrowSvg = ({ className, ...props }) => (
  <svg {...props} className={className} width="16px" height="14px" viewBox="0 0 16 14" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
    <g>
      <g transform="translate(-1129.000000, -832.000000)">
        <g transform="translate(150.000000, 247.000000)">
          <g transform="translate(959.000000, 50.000000)">
            <g transform="translate(0.000000, 529.000000)">
              <g>
                <g transform="translate(20.903614, 6.000000)">
                  <path d="M7.88554217,0.12962963 L7.88510385,9.47062963 L11.5234853,6.42125344 L12.6673734,7.38191999 L7.4208207,11.7811968 L2.17710385,7.38192932 L3.32375786,6.41946136 L6.95710385,9.46462963 L6.95783133,0.12962963 L7.88554217,0.12962963 Z" id="Combined-Shape"></path>
                  <polygon points="0 12.8333333 14.8433735 12.8333333 14.8433735 14 0 14"></polygon>
                </g>
              </g>
            </g>
          </g>
        </g>
      </g>
    </g>
  </svg>
);

export default DownloadArrowSvg;

DownloadArrowSvg.propTypes = {
  className: PropTypes.string,
};

DownloadArrowSvg.defaultProps = {
  className: '',
};
