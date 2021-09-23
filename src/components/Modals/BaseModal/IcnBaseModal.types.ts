import { WithChildren } from '@helper/types/WithChildren.types';
import { ModalSize, ModalType } from '@components/Modals/IcnModal.types';

export interface BaseModalProps extends WithChildren {
  title: string;
  description?: string;
  subhead?: string;
  bodyText?: string;
  size?: ModalSize;
  modalType?: ModalType;
  isOpen?: boolean;
  titleStyle?: object;
  footerStyle?: React.CSSProperties;
  primaryButtonText?: string;
  tertiaryButtonText?: string;
  buttons?: React.ReactNode;
  customClassName?: string;
  disablePrimary?: boolean;
  hideButton?: boolean;
  primaryButtonCallback?: () => void;
  tertiaryButtonCallback?: () => void;
  onRequestClose?: () => void;
  customActionButtonsCreator?: (styles: React.CSSProperties, props: unknown) => void;
}
