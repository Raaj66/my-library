import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import { FieldGlow } from '../../utils';
import styles from './IcnTextarea.module.scss';

const cx = classNames.bind(styles);

const onBlur = (
  e = {},
  glow = false,
  enable,
  disable
) => {
  if (!glow) {
    return;
  }

  return e.target && e.target.value ? disable() : enable();
};

const IcnTextarea = ({
  textAreaId,
  width,
  height,
  callbackOnChange,
  callbackOnBlur,
  value,
  placeholder,
  disabled,
  glow,
}) => {
  const dimensions = { width, height };

  return (
    <FieldGlow enabled={glow}>
      {
        (glowState, enable, disable) => (
          <div
            className={cx({
              icn_textarea_container: true,
              incomplete: glowState.on,
            })}
          >
            <textarea
              id={textAreaId}
              style={dimensions}
              className={cx({
                icn_textarea: true,
                incomplete: glowState.on,
              })}
              value={value}
              placeholder={placeholder}
              onChange={(e) => {
                callbackOnChange(e.target.value);
              }}
              onBlur={(e) => {
                callbackOnBlur(e.target.value);
                onBlur(e, glow, enable, disable);
              }}
              disabled={disabled}
            />
          </div>
        )
      }
    </FieldGlow>
  );
};

IcnTextarea.propTypes = {
  textAreaId: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string,
  callbackOnChange: PropTypes.func.isRequired,
  callbackOnBlur: PropTypes.func,
  value: PropTypes.string,
  placeholder: PropTypes.string,
  disabled: PropTypes.bool,
  glow: PropTypes.bool,
};

IcnTextarea.defaultProps = {
  value: '',
  placeholder: '',
  width: '380px',
  height: '138px',
  disabled: false,
  glow: false,
  callbackOnBlur: () => null,
};

export default IcnTextarea;
