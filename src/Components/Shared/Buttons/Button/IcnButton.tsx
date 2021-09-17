/* eslint-disable react/button-has-type */
import React, { useCallback } from 'react';
import cx from 'classnames';
import { ButtonSize, ButtonType, ButtonVariant, IIcnButtonProps } from './IcnButton.types';
import RenderIcon from './ButtonIcon';
import styles from './IcnButton.module.scss';

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
      className={cx(styles.icnBtn, className, styles[styleType], styles[size], {
        [styles.pull_right]: !!pullRight,
        [styles.disabled]: disabled,
      })}
      disabled={disabled}
    >
      <RenderIcon IconSvg={IconSvg} iconClassName={iconClassName} size={size} />
      <span>{text || children}</span>
    </button>
  );
};

export default IcnButton;
