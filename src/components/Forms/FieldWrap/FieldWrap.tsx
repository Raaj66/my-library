import React from 'react';
import cx from 'classnames';
import styles from './FieldWrap.module.scss';
import { IIFieldWrapProps } from './FieldWrap.types';

const FieldWrap = ({ size, classNames, id, children }: IIFieldWrapProps) => {
  return (
    <div className={cx(classNames, { [styles[size]]: !!styles[size] })} id={id}>
      {children}
    </div>
  );
};
export default FieldWrap;
