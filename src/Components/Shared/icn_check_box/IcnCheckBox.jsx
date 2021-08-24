import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import CheckboxUncheckedSvg from '../svgs/CheckboxUncheckedSvg'
import CheckboxCheckedSvg from '../svgs/CheckboxCheckedSvg';
import CheckboxPartialSvg from '../svgs/CheckboxUncheckedSvg';
import CheckboxRadioUncheckedSvg from '../svgs/CheckboxRadioUncheckedSvg';
import CheckboxRadioCheckedSvg from '../svgs/CheckboxRadioCheckedSvg';
import styles from './IcnCheckBox.module.scss';

const cx = classNames.bind(styles);

class IcnCheckBox extends PureComponent {
  getCheckBoxSvg = (checked, isRadio, indeterminate) => {
    let checkboxSvg;
    if (isRadio) {
      if (checked) {
        checkboxSvg = <CheckboxRadioCheckedSvg className={styles.checkbox_radio_checked} />;
      } else {
        checkboxSvg = <CheckboxRadioUncheckedSvg className={styles.checkbox_radio_unchecked} />;
      }
    } else {
      if (!checked) {
        checkboxSvg = <CheckboxUncheckedSvg className={styles.checkbox_unchecked} />;
      } else if (indeterminate) {
        checkboxSvg = <CheckboxPartialSvg className={styles.checkbox_partial} />;
      } else {
        checkboxSvg = <CheckboxCheckedSvg className={styles.checkbox_checked} />;
      }
    }
    return checkboxSvg;
  }

  render() {
    const {
      isRadio,
      glow,
      standardSize,
      tieToId,
      checked,
      disabled,
      callback,
      indeterminate,
      label,
      className,
      size,
    } = this.props;

    return (
      <label
        htmlFor={tieToId}
        className={cx(className, {
          check_wrapper: true,
          is_radio: isRadio,
          glow,
          label_standard_size: standardSize,
          medium: size === 'medium',
        })}
      >
        <input
          type="checkbox"
          id={tieToId}
          checked={checked}
          disabled={disabled}
          onChange={callback}
        />
        <div
          className={cx({
            check_box_holder: true,
            checked,
            disabled,
            indeterminate,
          })}
          htmlFor={tieToId}
          id={`${tieToId}-label`}
        >
          {
            this.getCheckBoxSvg(checked, isRadio, indeterminate)
          }
        </div>
        {label && (
          <span className={styles.check_wrapper__label}>{label}</span>
        )}
      </label>
    );
  }
}

IcnCheckBox.propTypes = {
  glow: PropTypes.bool,
  standardSize: PropTypes.bool,
  indeterminate: PropTypes.bool,
  label: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.node,
  ]),
  isRadio: PropTypes.bool,
  className: PropTypes.string,
  checked: PropTypes.bool.isRequired,
  tieToId: PropTypes.string,
  disabled: PropTypes.bool,
  callback: PropTypes.func.isRequired,
  size: PropTypes.string,
};

IcnCheckBox.defaultProps = {
  glow: false,
  isRadio: false,
  className: '',
  standardSize: false,
  indeterminate: false,
  disabled: false,
  label: null,
  tieToId: null,
  size: 'large',
};

export default IcnCheckBox;
