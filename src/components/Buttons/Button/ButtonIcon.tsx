import React from 'react';
import cx from 'classnames';
import { IIconProps } from './IcnButton.types';
import styles from './IcnButton.module.scss';
import 'font-awesome/css/font-awesome.css';

const RenderIcon: React.FC<IIconProps> = ({ IconSvg, iconClassName, size }) => {
  if (IconSvg) {
    return <IconSvg className={cx(styles.iconSvg, styles.icon, styles[size])} />;
  }
  if (iconClassName) {
    return <i className={cx(iconClassName, styles.icon, styles[size])} />;
  }
  return null;
};

export default RenderIcon;
