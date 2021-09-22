/* eslint-disable import/no-cycle */
import { BaseModalProps } from 'components/Modals/BaseModal/IcnBaseModal.types';

export interface IIcnHistoryModalProps extends BaseModalProps {
  primaryButtonText?: string;
  primaryButtonCallback?: () => void;
}
