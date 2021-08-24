import React from 'react';
import PropTypes from 'prop-types';

const QuestionMarkSvg = ({ className, ...props }) => (
  <svg {...props} className={className} width="24px" height="24px" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
    <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
      <g transform="translate(-329.000000, -2278.000000)" fill="#27A4AA">
        <g transform="translate(48.000000, 2270.000000)">
          <g transform="translate(281.000000, 8.000000)">
            <g>
              <path d="M14,20 L14,17 C14,16.21875 13.78125,16 14,16 L11,16 C10.21875,16 10,16.21875 10,17 L10,20 C10,19.78125 10.21875,20 11,20 L14,20 C13.78125,20 14,19.78125 14,20 Z M18,9 C18,6.140625 14.8858715,4 12,4 C9.45236593,4 7.47359676,5.09375 6,7 C5.9327519,7.546875 5.99762958,7.828125 6,8 L8,10 C8.43054251,9.609375 8.54407844,9.640625 9,10 C8.80358915,9.640625 8.96578335,9.578125 9,9 C9.82541258,8.515625 10.149801,8.234375 10,8 C10.7337001,7.828125 11.2689409,7.640625 12,8 C12.8908829,7.640625 13.8478286,8.28125 14,9 C13.8478286,9.78125 13.4099043,10.1875 12,11 C11.2689409,11.125 9.69565722,12.421875 10,14 L10,15 C9.69565722,14.78125 9.9227291,15 10,15 L13,15 C13.6207567,15 13.8478286,14.78125 14,15 C13.8478286,14.140625 14.3181918,13.375 15,13 C16.3131804,12.28125 18,11.375 18,9 Z M24,12 C24,18.625 18.625,24 12,24 C5.375,24 5.68434189e-14,18.625 5.68434189e-14,12 C5.68434189e-14,5.375 5.375,-3.89771548e-13 12,-3.89771548e-13 C18.625,-3.89771548e-13 24,5.375 24,12 Z" id="-copy-2" />
            </g>
          </g>
        </g>
      </g>
    </g>
  </svg>
);

export default QuestionMarkSvg;

QuestionMarkSvg.propTypes = {
  className: PropTypes.string,
};

QuestionMarkSvg.defaultProps = {
  className: '',
};