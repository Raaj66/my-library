import React from 'react';
import PropTypes from 'prop-types';

const InfoSvg = ({ className, ...props }) => (
  <svg {...props} className={className} width="28px" height="28px" viewBox="0 0 28 28" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
    <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
      <g transform="translate(-246.000000, -3489.000000)">
        <g transform="translate(48.000000, 3479.000000)">
          <g transform="translate(16.000000, 12.000000)">
            <g transform="translate(184.000000, 0.000000)">
              <rect fill="#258AB9" x="10.2857143" y="8.81635543" width="3.42857143" height="10.2857143" />
              <path d="M12,-1 C8.41145833,-1 5.16140214,0.455634301 2.80851822,2.80851822 C0.455634301,5.16140214 -1,8.41145833 -1,12 C-1,15.5885417 0.455634301,18.8385979 2.80851822,21.1914818 C5.16140214,23.5443657 8.41145833,25 12,25 C15.5885417,25 18.8385979,23.5443657 21.1914818,21.1914818 C23.5443657,18.8385979 25,15.5885417 25,12 C25,8.41145833 23.5443657,5.16140214 21.1914818,2.80851822 C18.8385979,0.455634301 15.5885417,-1 12,-1 Z" id="Path" stroke="#258AB9" strokeWidth="2" fill="#FFFFFF" fillRule="nonzero" />
              <path d="M16,19.5 L16,17 C16,16.71875 15.78125,16.5 15.5,16.5 L14,16.5 L14,8.5 C14,8.21875 13.78125,8 13.5,8 L8.5,8 C8.21875,8 8,8.21875 8,8.5 L8,11 C8,11.28125 8.21875,11.5 8.5,11.5 L10,11.5 L10,16.5 L8.5,16.5 C8.21875,16.5 8,16.71875 8,17 L8,19.5 C8,19.78125 8.21875,20 8.5,20 L15.5,20 C15.78125,20 16,19.78125 16,19.5 Z" id="Path" fill="#258AB9" fillRule="nonzero" />
              <path d="M14,5.5 L14,3 C14,2.71875 13.78125,2.5 13.5,2.5 L10.5,2.5 C10.21875,2.5 10,2.71875 10,3 L10,5.5 C10,5.78125 10.21875,6 10.5,6 L13.5,6 C13.78125,6 14,5.78125 14,5.5 Z" id="Path" fill="#258AB9" fillRule="nonzero" />
            </g>
          </g>
        </g>
      </g>
    </g>
  </svg>
);

export default InfoSvg;

InfoSvg.propTypes = {
  className: PropTypes.string,
};

InfoSvg.defaultProps = {
  className: '',
};
