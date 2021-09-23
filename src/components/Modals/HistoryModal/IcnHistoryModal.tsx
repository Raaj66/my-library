import React from 'react';
import IcnBaseModal from '@components/Modals/BaseModal';
import { ModalType } from '@components/Modals/IcnModal.types';
import { IIcnHistoryModalProps } from './IcnHistoryModal.types';

const IcnHistoryModal = ({
  title,
  size,
  isOpen,
  primaryButtonText,
  onRequestClose,
  primaryButtonCallback,
  children,
}: IIcnHistoryModalProps) => {
  return (
    <IcnBaseModal
      title={title}
      modalType={ModalType.History}
      primaryButtonText={primaryButtonText}
      primaryButtonCallback={primaryButtonCallback}
      size={size}
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      footerStyle={{ marginTop: '36px' }}
    >
      {children}
    </IcnBaseModal>
  );
};

export default IcnHistoryModal;
