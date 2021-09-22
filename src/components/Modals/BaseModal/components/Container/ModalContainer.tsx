import React from 'react';
import { ModalType } from '../../../IcnModal.types';
import { ModalContainerProps } from './ModalContainer.types';
import styles from './ModalContainer.module.scss';

const ModalContainer = ({ modalType, subhead, bodyText, children }: ModalContainerProps) => {
  const hasSubhead = modalType && modalType === ModalType.Warning && !!subhead;
  const hasBodyText = modalType && modalType === ModalType.Warning && !!bodyText;
  return (
    <div className={styles.scrollbar} data-test-id="IcnBaseModal-content">
      {!!children && children}
      {!children && hasSubhead && (
        <p className={styles.subhead} data-test-id="IcnBaseModal-content--subhead">
          {subhead}
        </p>
      )}
      {!children && hasBodyText && (
        <p className={styles.bodyText} data-test-id="IcnBaseModal-content--bodyText">
          {bodyText}
        </p>
      )}
    </div>
  );
};

export default ModalContainer;
