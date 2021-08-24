import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './FieldWrap.module.scss';

const cx = classNames.bind(styles);

const propTypes = {
  size: PropTypes.string,
  classNames: PropTypes.object,
  id: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired
};

const FieldWrap = (props) => {

  const styleObj = {
    [styles[props.size]]: !!styles[props.size],
  };
  if (props.classNames) {
    Object.assign(styleObj,props.classNames);
  }

  return (
    <div className={cx(styleObj)} id={props.id}>
      {props.children}
    </div>
  );
}

FieldWrap.propTypes = propTypes;

export default FieldWrap;
