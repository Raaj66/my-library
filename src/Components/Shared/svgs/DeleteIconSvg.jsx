import React from 'react';
import PropTypes from 'prop-types';

const DeleteIconSvg = ({ className, ...props }) => (
  <svg {...props} className={className} width="11px" height="11px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 11 11">
    <path d="M7.594,5.5l3.125,3.125A.935.935,0,0,1,11,9.313a1.043,1.043,0,0,1-.281.719l-.687.688A1.043,1.043,0,0,1,9.313,11a.935.935,0,0,1-.687-.281L5.5,7.594,2.375,10.719A.935.935,0,0,1,1.688,11a1.043,1.043,0,0,1-.719-.281l-.687-.687A1.043,1.043,0,0,1,0,9.313a.935.935,0,0,1,.281-.687L3.406,5.5.281,2.375A.935.935,0,0,1,0,1.688,1.043,1.043,0,0,1,.281.969L.969.281A1.043,1.043,0,0,1,1.688,0a.935.935,0,0,1,.688.281L5.5,3.406,8.625.281A.935.935,0,0,1,9.313,0a1.043,1.043,0,0,1,.719.281l.688.688A1.043,1.043,0,0,1,11,1.688a.935.935,0,0,1-.281.688Z" fill="#2ca8e2" />
  </svg>
);

export default DeleteIconSvg;

DeleteIconSvg.propTypes = {
  className: PropTypes.string,
};

DeleteIconSvg.defaultProps = {
  className: '',
};
