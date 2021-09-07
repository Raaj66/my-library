import React from 'react';
import cx from 'classnames';
import { IIconProps } from './IcnButton.types';

const RenderIcon: React.FC<IIconProps> = ({ IconSvg, iconClassName, size }) => {
  if (IconSvg) {
    return <IconSvg className={cx('iconSvg', 'icon', size)} />;
  }
  if (iconClassName) {
    return <i className={cx(iconClassName, 'icon', size)} />;
  }
  return null;
};

export default RenderIcon;
