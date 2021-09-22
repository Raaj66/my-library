/* eslint-disable import/no-cycle */
import { BaseModalProps } from '../BaseModal/IcnBaseModal.types';

export interface IIcnActionModalProps extends BaseModalProps {
  primaryButtonText?: string;
  tertiaryButtonText?: string;
  primaryButtonCallback?: () => void;
  tertiaryButtonCallback?: () => void;
  customActionButtonsCreator?: (styles: { [key: string]: any }, props: any) => void;
  disablePrimary?: boolean;
}
