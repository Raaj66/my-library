import React from 'react';
import PropTypes from 'prop-types';

const PreviewIconSvg = ({ className, ...props }) => (
  <svg {...props} className={className} width="17" height="18" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 17 18">
    <rect data-name="preview-icon background" width="17" height="18" fill="rgba(0,0,0,0)" />
    <g data-name="preview-icon_15x18 copy 4" transform="translate(1)">
      <g fill="none" strokeMiterlimit="10">
        <path d="M0,1A1,1,0,0,1,1,0h9.165a1,1,0,0,1,.725.311l3.835,4.031A1,1,0,0,1,15,5.031V17a1,1,0,0,1-1,1H1a1,1,0,0,1-1-1Z" stroke="none" />
        <path d="M 1.5 1.5 L 1.5 16.5 L 13.5 16.5 L 13.5 5.231307983398438 L 9.950681686401367 1.5 L 1.5 1.5 M 1 0 L 10.16514015197754 0 C 10.43902969360352 0 10.70092964172363 0.1123409271240234 10.88969993591309 0.3107795715332031 L 14.72455024719238 4.342269897460938 C 14.90137958526611 4.528169631958008 15 4.774920463562012 15 5.031479835510254 L 15 17 C 15 17.55228042602539 14.55228042602539 18 14 18 L 1 18 C 0.4477100372314453 18 0 17.55228042602539 0 17 L 0 1 C 0 0.4477195739746094 0.4477100372314453 0 1 0 Z" stroke="none" fill="#2ca8e2" />
      </g>
      <path data-name="Path 2" d="M0,0V5.2H3.851" transform="translate(8.716 0.6)" fill="none" stroke="#2ca8e2" strokeMiterlimit="10" strokeWidth="1" />
    </g>
  </svg>
);

export default PreviewIconSvg;

PreviewIconSvg.propTypes = {
  className: PropTypes.string,
};

PreviewIconSvg.defaultProps = {
  className: '',
};
