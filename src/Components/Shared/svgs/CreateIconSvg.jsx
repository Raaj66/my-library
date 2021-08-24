import React from 'react';
import PropTypes from 'prop-types';

const CreateIconSvg = ({ className, ...props }) => (
  <svg {...props} className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15.667 16.833">
    <g transform="translate(0)">
      <g data-name="preview-icon_15x18 copy 5" transform="translate(4)">
        <g fill="none" strokeMiterlimit="10">
          <path d="M0,1A1,1,0,0,1,1,0H7.811a1,1,0,0,1,.725.311l2.856,3A1,1,0,0,1,11.667,4v9a1,1,0,0,1-1,1H1a1,1,0,0,1-1-1Z" stroke="none" />
          <path d="M 1.500003814697266 1.5 L 1.500003814697266 12.5 L 10.16666316986084 12.5 L 10.16666316986084 4.202008247375488 L 7.596434593200684 1.5 L 1.500003814697266 1.5 M 1.000003814697266 0 L 7.810903549194336 0 C 8.084793090820312 0 8.34669303894043 0.112339973449707 8.535453796386719 0.3107795715332031 L 11.3912239074707 3.312970161437988 C 11.56805324554443 3.498869895935059 11.66666316986084 3.745619773864746 11.66666316986084 4.002189636230469 L 11.66666316986084 13 C 11.66666316986084 13.55228042602539 11.21895313262939 14 10.66666316986084 14 L 1.000003814697266 14 C 0.4477138519287109 14 3.814697265625e-06 13.55228042602539 3.814697265625e-06 13 L 3.814697265625e-06 1 C 3.814697265625e-06 0.4477100372314453 0.4477138519287109 0 1.000003814697266 0 Z" stroke="none" fill="#2ca8e2" />
        </g>
        <path data-name="Path 2" d="M0,0V4.045H3" transform="translate(6.779 0.467)" fill="none" stroke="#2ca8e2" strokeMiterlimit="10" strokeWidth="1" />
      </g>
      <g data-name="Group 8 Copy" transform="translate(0 5)">
        <path id="Fill_6" data-name="Fill 6" d="M11,5.5A5.5,5.5,0,1,1,5.5,0,5.5,5.5,0,0,1,11,5.5" transform="translate(0 0.833)" fill="#2ca8e2" />
      </g>
      <path data-name="Stroke 9 Copy" d="M.5,0V7" transform="translate(5 8)" fill="none" stroke="#fff" strokeMiterlimit="10" strokeWidth="1.5" />
      <path data-name="Stroke 11 Copy" d="M0,.5H7" transform="translate(2 11)" fill="none" stroke="#fff" strokeMiterlimit="10" strokeWidth="1.5" />
    </g>
  </svg>

);

export default CreateIconSvg;

CreateIconSvg.propTypes = {
  className: PropTypes.string,
};

CreateIconSvg.defaultProps = {
  className: '',
};
