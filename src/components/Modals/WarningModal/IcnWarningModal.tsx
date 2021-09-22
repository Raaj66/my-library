import React from 'react';
import IcnBaseModal from '../BaseModal';
import { IIcnWarningModalProps } from './IcnWarningModal.types';
import { ModalType } from '../IcnModal.types';

const IcnWarningModal = ({
  title,
  isOpen = true,
  onRequestClose,
  primaryButtonText,
  tertiaryButtonText,
  primaryButtonCallback,
  tertiaryButtonCallback,
  hideButton = false,
  subhead,
  bodyText,
}: IIcnWarningModalProps) => {
  return (
    <IcnBaseModal
      title={title}
      primaryButtonText={primaryButtonText}
      tertiaryButtonText={tertiaryButtonText}
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      modalType={ModalType.Warning}
      hideButton={hideButton}
      primaryButtonCallback={primaryButtonCallback}
      tertiaryButtonCallback={tertiaryButtonCallback}
      subhead={subhead}
      bodyText={bodyText}
    />
  );
};
export default IcnWarningModal;
