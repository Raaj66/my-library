import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './IcnButton.scss';

const cx = classNames.bind(styles);


const IcnButton = ({
  id,
  text,
  children,
  callback,
  type,
  styleType,
  size,
  pullRight,
  disabled,
  className,
  iconSvg: IconSvg,
  iconClassName,
}) => {
  const onClick = useCallback((e) => {
    if (callback && !disabled) {
      callback(e);
    }
  }, [disabled, callback]);

  const buttonClassName = cx(
    {
      icn_btn: true,
      [`icn_btn_${styleType}`]: true,
      [`icn_btn_size_${size}`]: true,
      'pull-right': pullRight,
      disabled,
    },
    className
  );

  const icon = () => {
    const iconPaddingRight = { [`icn_btn_icon_${size}`]: true };

    if (IconSvg) {
      return (<IconSvg className={cx(iconPaddingRight, 'icon_svg')} />);
    }

    if (iconClassName !== '') {
      return (<i className={cx(iconPaddingRight, iconClassName)} />);
    }

    return null;
  };

  return (
    // eslint-disable-next-line react/button-has-type
    <button
      id={id}
      type={type}
      onClick={onClick}
      className={buttonClassName}
      disabled={disabled}
    >
      {icon()}
      <span>{text || children}</span>
    </button>
  );
};

IcnButton.propTypes = {
  // eslint-disable-next-line react/require-default-props
  id: PropTypes.string,
  text: PropTypes.string,
  children: PropTypes.node,
  callback: PropTypes.func,
  type: PropTypes.string,
  styleType: PropTypes.string,
  size: PropTypes.string,
  pullRight: PropTypes.bool,
  disabled: PropTypes.bool,
  className: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string),
  ]),
  iconSvg: PropTypes.elementType,
  iconClassName: PropTypes.string,
};

IcnButton.defaultProps = {
  text: '',
  children: null,
  callback: null,
  type: 'button',
  styleType: 'primary',
  size: 'lg',
  pullRight: false,
  disabled: false,
  className: '',
  iconSvg: null,
  iconClassName: '',
};

export default IcnButton;
