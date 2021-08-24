import React from 'react';
import PropTypes from 'prop-types';

const TransferSvg = ({ className, ...props }) => (
  <svg {...props} className={className} width="24px" height="20px" viewBox="0 0 24 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
    <defs>
      <path d="M6.20689655,-6.66133815e-17 L9.93103448,3.72413793 L6.20689655,7.44827586 L4.96551724,6.20689655 L7.035,4.137 L1.17239551e-14,4.13793103 L1.17239551e-14,3.31034483 L7.034,3.31 L4.96551724,1.24137931 L6.20689655,-6.66133815e-17 Z" id="path-1" />
      <path d="M6.20689655,-6.66133815e-17 L9.93103448,3.72413793 L6.20689655,7.44827586 L4.96551724,6.20689655 L7.035,4.137 L1.17239551e-14,4.13793103 L1.17239551e-14,3.31034483 L7.034,3.31 L4.96551724,1.24137931 L6.20689655,-6.66133815e-17 Z" id="path-3" />
    </defs>
    <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
      <g transform="translate(-813.000000, -4188.000000)">
        <g transform="translate(584.000000, 4174.000000)">
          <g transform="translate(16.000000, 14.000000)">
            <g transform="translate(213.000000, 0.000000)">
              <rect stroke="#0077AA" strokeWidth="1.2" fill="#FFFFFF" x="0.6" y="0.6" width="22.8" height="18" rx="3.6" />
              <g transform="translate(11.610345, 9.520000) rotate(90.000000) translate(-11.610345, -9.520000) translate(5.610345, 1.020000)">
                <g transform="translate(0.900000, 8.110345)">
                  <g transform="translate(5.131034, 4.000000) scale(-1, 1) translate(-5.131034, -4.000000) translate(0.131034, 0.000000)">
                    <g>
                      <mask fill="white">
                        <use xlinkHref="#path-1" />
                      </mask>
                      <use fill="#2CA8E2" xlinkHref="#path-1" />
                      <g mask="url(#mask-2)" fill="#0077AA">
                        <rect x="0" y="0" width="10.8" height="8.4" />
                      </g>
                    </g>
                  </g>
                </g>
                <g transform="translate(5.700000, 4.682759) scale(-1, 1) translate(-5.700000, -4.682759) translate(0.200000, 0.682759)">
                  <g transform="translate(5.131034, 4.000000) scale(-1, 1) translate(-5.131034, -4.000000) translate(0.131034, 0.000000)">
                    <g>
                      <mask fill="white">
                        <use xlinkHref="#path-3" />
                      </mask>
                      <use fill="#2CA8E2" xlinkHref="#path-3" />
                      <g mask="url(#mask-4)" fill="#0077AA">
                        <g transform="translate(-0.868966, -1.200000)" id="Rectangle">
                          <rect x="0" y="0" width="10.8" height="9.6" />
                        </g>
                      </g>
                    </g>
                  </g>
                </g>
              </g>
            </g>
          </g>
        </g>
      </g>
    </g>
  </svg>
);

export default TransferSvg;

TransferSvg.propTypes = {
  className: PropTypes.string,
};

TransferSvg.defaultProps = {
  className: '',
};
