/* eslint-disable import/no-cycle */
import { BaseModalProps } from '../BaseModal/IcnBaseModal.types';

export interface IIcnWarningModalProps extends BaseModalProps {
  title: string;
  subhead?: string;
  bodyText: string;
  primaryButtonText?: string;
  tertiaryButtonText?: string;
  hideButton?: boolean;
  primaryButtonCallback?: () => void;
  tertiaryButtonCallback?: () => void;
}
