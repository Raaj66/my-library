import { WithChildren } from 'helper/types/WithChildren.types';
import { ModalType } from 'components/Modals/IcnModal.types';

export interface ModalFooterProps extends WithChildren {
  footerStyle?: React.CSSProperties;
  modalType?: ModalType;
  buttons?: React.ReactNode;
  primaryButtonText?: string;
  tertiaryButtonText?: string;
  disablePrimary?: boolean;
  hideButton?: boolean;
  primaryButtonCallback?: () => void;
  tertiaryButtonCallback?: () => void;
  customActionButtonsCreator?: (styles: React.CSSProperties, props: unknown) => void;
}
