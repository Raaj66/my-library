import React from 'react';
import IcnBaseModal from '../BaseModal';
import { IIcnActionModalProps } from './IcnActionModal.types';
import { ModalType } from '../IcnModal.types';

const IcnActionModal = (props: IIcnActionModalProps) => {
  const {
    title,
    description,
    primaryButtonText,
    tertiaryButtonText,
    size,
    isOpen,
    onRequestClose,
    disablePrimary,
    primaryButtonCallback,
    tertiaryButtonCallback,
    children,
    customClassName,
    customActionButtonsCreator,
  } = props;
  return (
    <IcnBaseModal
      title={title}
      description={description}
      customClassName={customClassName}
      size={size}
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      modalType={ModalType.Action}
      disablePrimary={disablePrimary}
      primaryButtonText={primaryButtonText}
      primaryButtonCallback={primaryButtonCallback}
      tertiaryButtonText={tertiaryButtonText}
      tertiaryButtonCallback={tertiaryButtonCallback}
      customActionButtonsCreator={customActionButtonsCreator}
    >
      {children}
    </IcnBaseModal>
  );
};

export default IcnActionModal;
