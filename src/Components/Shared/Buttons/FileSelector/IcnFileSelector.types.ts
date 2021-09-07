import { IIcnButtonProps } from '../Button/IcnButton.types';

export interface IIcnFileSelectorProps extends IIcnButtonProps {
  onFileSelected?: (file: File) => void;
  accept?: string;
  name?: string;
  id?: string;
  reset?: () => void;
}
