import React, { useCallback, useEffect, useRef } from 'react';
import { v4 as uuidV4 } from 'uuid';
import ReactModal from 'react-modal';
import { BaseModalProps } from './IcnBaseModal.types';
import { ModalSize, ModalType } from '../IcnModal.types';
import customStyles from './IcnBaseModal.styled';
import { ModalHeader, ModalContainer, ModalFooter } from './components';
import ModalWidth from './constants';

const IcnBaseModal = ({
  isOpen = true,
  onRequestClose,
  size = ModalSize.Medium,
  titleStyle,
  title,
  description,
  footerStyle,
  buttons,
  customClassName,
  modalType = ModalType.Custom,
  primaryButtonText,
  tertiaryButtonText,
  primaryButtonCallback,
  tertiaryButtonCallback,
  disablePrimary = false,
  hideButton = false,
  customActionButtonsCreator,
  subhead,
  bodyText,
  children,
}: BaseModalProps) => {
  const headerUuid = uuidV4();
  const descriptionUuid = uuidV4();
  const ModalRef = useRef<ReactModal>();

  const getCustomStyles = useCallback(
    (stylesToChange: ReactModal.Styles) => {
      let { width } = stylesToChange.content;

      if (size) {
        width = ModalWidth[size];
      }

      return {
        ...stylesToChange,
        content: {
          ...stylesToChange.content,
          width,
        },
      };
    },
    [size]
  );

  useEffect(() => {
    ReactModal.setAppElement('body');
  });

  useEffect(() => {
    getCustomStyles(customStyles);
  }, [getCustomStyles, size]);

  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      style={getCustomStyles(customStyles)}
      ariaHideApp={false}
      aria={{
        labelledby: headerUuid,
        describedby: descriptionUuid,
      }}
      ref={ModalRef}
      className={customClassName}
    >
      <>
        <ModalHeader
          titleStyle={titleStyle}
          title={title}
          description={description}
          headerUuid={headerUuid}
          descriptionUuid={descriptionUuid}
        />
        <ModalContainer modalType={modalType} subhead={subhead} bodyText={bodyText}>
          {children}
        </ModalContainer>
        <ModalFooter
          modalType={modalType}
          footerStyle={footerStyle}
          buttons={buttons}
          hideButton={hideButton}
          primaryButtonText={primaryButtonText}
          tertiaryButtonText={tertiaryButtonText}
          primaryButtonCallback={primaryButtonCallback}
          tertiaryButtonCallback={tertiaryButtonCallback}
          disablePrimary={disablePrimary}
          customActionButtonsCreator={customActionButtonsCreator}
        />
      </>
    </ReactModal>
  );
};

export default IcnBaseModal;

/* export default Object.assign(IcnBaseModal, {
  ModalHeader,
  ModalContainer,
  ModalFooter,
}); */
