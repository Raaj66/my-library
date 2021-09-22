import React from 'react';
import { ModalSize } from '../IcnModal.types';
import { BaseModalProps } from './IcnBaseModal.types';
import IcnBaseModal from './IcnBaseModal';

export default {
  title: 'Components/Modals/Base Modal',
  component: IcnBaseModal,
  argTypes: {
    size: {
      defaultValue: {
        summary: ModalSize.Medium,
      },
      control: {
        type: 'select',
        options: ModalSize,
      },
    },
  },
};
export const Default = (args: BaseModalProps) => {
  const { size, title, description, onRequestClose, isOpen, children } = args;
  return (
    <IcnBaseModal
      size={size}
      title={title}
      description={description}
      primaryButtonText="Yes"
      tertiaryButtonText="No"
      onRequestClose={onRequestClose}
      isOpen={isOpen}
    >
      {children}
    </IcnBaseModal>
  );
};
Default.args = {
  size: ModalSize.Medium,
  title: 'Title',
  description: 'Description',
  isOpen: true,
  children: 'children',
};
