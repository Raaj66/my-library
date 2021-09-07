/* eslint-disable react/button-has-type */
import React, { useCallback } from 'react';
import cx from 'classnames';
import './IcnButton.module.scss';
import { ButtonSize, ButtonType, ButtonVariant, IIcnButtonProps } from './IcnButton.types';
import RenderIcon from './ButtonIcon';

const IcnButton = ({
  id,
  text,
  children,
  callback,
  type = ButtonType.Button,
  styleType = ButtonVariant.Primary,
  size = ButtonSize.Large,
  pullRight,
  disabled = false,
  className,
  iconSvg: IconSvg,
  iconClassName,
}: IIcnButtonProps) => {
  const onClick = useCallback(
    (e: React.MouseEvent) => {
      if (callback && !disabled) {
        callback(e);
      }
    },
    [disabled, callback]
  );

  return (
    <button
      id={id}
      type={type}
      onClick={onClick}
      className={cx('icnBtn', className, styleType, size, { pull_right: !!pullRight, disabled })}
      disabled={disabled}
    >
      <RenderIcon IconSvg={IconSvg} iconClassName={iconClassName} size={size} />
      <span>{text || children}</span>
    </button>
  );
};

export default IcnButton;
