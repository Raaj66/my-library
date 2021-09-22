import React from 'react';
import { ModalHeaderProps } from './ModalHeader.types';
import styles from './ModalHeader.module.scss';

const ModalHeader = ({ titleStyle, title, description, headerUuid, descriptionUuid, children }: ModalHeaderProps) => {
  if (children) {
    return <>{children}</>;
  }
  return (
    <>
      <h1 id={headerUuid} data-test-id="IcnBaseModal-header" className={styles.title} style={titleStyle}>
        {title}
      </h1>
      {description && (
        <div id={descriptionUuid} data-test-id="IcnBaseModal-header--description">
          <p className={styles.description}>{description}</p>
        </div>
      )}
    </>
  );
};

export default ModalHeader;
