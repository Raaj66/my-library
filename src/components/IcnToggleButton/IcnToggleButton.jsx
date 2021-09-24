import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { func, string, bool, object, objectOf, arrayOf, oneOfType } from 'prop-types';
import { v4 as uuid } from 'uuid';
import classNames from 'classnames/bind';
import styles from './IcnToggleButton.module.scss';

const cx = classNames.bind(styles);

const IcnToggleButton = (props) => {
  const { uniqueKey, fixedContainer, labelKey, valueKey, value, callback, returnByValue, disabled } = props;
  let { options } = props;

  const optionSanityCheck = useMemo(
    () =>
      options === undefined ||
      options === null ||
      !Array.isArray(options) ||
      options.length !== 2 ||
      !Object.prototype.hasOwnProperty.call(options[0], labelKey) ||
      !Object.prototype.hasOwnProperty.call(options[0], valueKey) ||
      !Object.prototype.hasOwnProperty.call(options[1], labelKey) ||
      !Object.prototype.hasOwnProperty.call(options[1], valueKey),
    [options, labelKey, valueKey]
  );

  if (optionSanityCheck) {
    options = [
      {
        [labelKey]: 'ON',
        [valueKey]: true,
      },
      {
        [labelKey]: 'OFF',
        [valueKey]: false,
      },
    ];
  }

  const consoleWarning = (v, k) => {
    if (!Object.prototype.hasOwnProperty.call(v, k)) {
      // eslint-disable-next-line no-console
      console.warn(
        `Key: "${k}" not found in object ${v}.
        Please make sure the option object in options contains the correct valueKey.
        "valueKey" By Default is "value", you can pass in custom valueKey through props.`
      );
    }
  };

  const getActiveValue = useCallback((v, k) => {
    if (typeof v === 'object' && v !== null) {
      consoleWarning(v, k);
      return v[k];
    }
    return v;
  }, []);

  const [activeValue, setActiveValue] = useState(getActiveValue(value, valueKey));

  const handleClick = (valueObject) => {
    let callbackValue;
    if (!returnByValue) {
      callbackValue = valueObject;
    } else {
      callbackValue = valueObject[valueKey];
    }

    setActiveValue(valueObject[valueKey]);
    callback(callbackValue);
  };

  useEffect(() => {
    setActiveValue(getActiveValue(value, valueKey));
  }, [getActiveValue, value, valueKey]);

  return (
    <div
      key={uniqueKey}
      className={cx(styles.container, {
        fixed_container: fixedContainer,
        flex_container: !fixedContainer,
        disabled,
      })}
    >
      <button
        className={cx({
          toggle_left: true,
          active: activeValue === options[0][valueKey],
        })}
        onClick={() => {
          handleClick(options[0]);
        }}
        disabled={disabled}
        type="button"
      >
        {options[0][labelKey]}
      </button>

      <button
        className={cx({
          toggle_right: true,
          active: activeValue === options[1][valueKey],
        })}
        onClick={() => {
          handleClick(options[1]);
        }}
        disabled={disabled}
        type="button"
      >
        {options[1][labelKey]}
      </button>
    </div>
  );
};

IcnToggleButton.defaultProps = {
  labelKey: 'label',
  valueKey: 'value',
  uniqueKey: uuid(),
  callback: () => {
    // do nothing.
  },
  value: '',
  fixedContainer: true,
  returnByValue: false,
  disabled: false,
};

IcnToggleButton.propTypes = {
  options: arrayOf(objectOf(oneOfType([string, bool]))).isRequired,
  labelKey: string,
  valueKey: string,
  uniqueKey: string,
  callback: func,
  value: oneOfType([bool, string, object]),
  fixedContainer: bool,
  returnByValue: bool,
  disabled: bool,
};

export default IcnToggleButton;
