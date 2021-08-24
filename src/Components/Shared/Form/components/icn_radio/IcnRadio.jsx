import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './IcnRadio.module.scss';

const cx = classNames.bind(styles);

const IcnRadio = ({
  text,
  callback,
  checked,
  optionalClasses,
  disabled,
  otherAttributes,
  glow,
}) => (
  <label
    className={cx({
      icn_radio: true,
      incomplete: glow,
      disabled,
      ...optionalClasses,
    })}
    data-input-value={checked}
  >
    {text}
    <input
      type="radio"
      checked={checked}
      onChange={callback}
      disabled={disabled}
      {...otherAttributes}
    />
    <span className={styles.radio_button} />
  </label>
);

IcnRadio.defaultProps = {
  disabled: false,
  checked: false,
  glow: false,
  optionalClasses: {},
  otherAttributes: {},
};

IcnRadio.propTypes = {
  text: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.node,
  ]).isRequired,
  callback: PropTypes.func.isRequired,

  glow: PropTypes.bool,
  disabled: PropTypes.bool,
  checked: PropTypes.bool,
  optionalClasses: PropTypes.shape({}),
  otherAttributes: PropTypes.shape({}),
};

export default IcnRadio;
