import React from 'react';
import { isNil } from 'lodash';
import IcnButton, { ButtonSize, ButtonVariant } from '@components/Buttons/Button';
import { ModalType } from '@components/Modals/IcnModal.types';
import { ModalFooterProps } from './ModalFooter.types';
import styles from './ModalFooter.module.scss';

const ModalFooter = ({
  children,
  footerStyle,
  buttons,
  modalType,
  disablePrimary,
  hideButton,
  primaryButtonText,
  primaryButtonCallback,
  tertiaryButtonText,
  tertiaryButtonCallback,
  customActionButtonsCreator,
  ...rest
}: ModalFooterProps) => {
  const hasRuler = modalType === ModalType.Action || modalType === ModalType.Warning;
  const hasTertiary = modalType !== ModalType.History;
  const buttonStyles = styles.buttons;
  return (
    <div className={styles.footer} style={footerStyle} data-test-id="IcnBaseModal-footer">
      {!!children && children}
      {!children && (
        <>
          {isNil(customActionButtonsCreator) ? (
            <>
              {!!buttons && buttons}
              {!buttons && (
                <>
                  {hasRuler && <hr className={styles.horizontalRule} />}
                  {!!primaryButtonText && (
                    <IcnButton
                      className={buttonStyles}
                      size={ButtonSize.Medium}
                      text={primaryButtonText}
                      styleType={ButtonVariant.Primary}
                      callback={primaryButtonCallback}
                      disabled={disablePrimary}
                    />
                  )}
                  {hasTertiary && !hideButton && !!tertiaryButtonText && (
                    <IcnButton
                      className={buttonStyles}
                      size={ButtonSize.Medium}
                      text={tertiaryButtonText}
                      styleType={ButtonVariant.Tertiaty}
                      callback={tertiaryButtonCallback}
                    />
                  )}
                </>
              )}
            </>
          ) : (
            customActionButtonsCreator(styles, { ...rest })
          )}
        </>
      )}
    </div>
  );
};

export default ModalFooter;
