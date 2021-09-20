// import { WithChildren } from '../../../../helper/types/WithChildren.types';
import { WithChildren } from 'helper/types/WithChildren.types';

export enum ButtonSize {
  ExtraLarge = 'xl',
  Large = 'lg',
  Medium = 'md',
  Small = 'sm',
  ExtraSmall = 'xs',
}

export enum ButtonVariant {
  Primary = 'primary',
  Secondary = 'secondary',
  Tertiaty = 'tertiary',
}

export enum ButtonType {
  Button = 'button',
  Submit = 'submit',
  Reset = 'reset',
}

export interface IIcnButtonProps extends WithChildren {
  id?: string;
  text: string;
  callback?: (e: React.MouseEvent) => void;
  type?: ButtonType;
  styleType?: ButtonVariant;
  size?: ButtonSize;
  pullRight?: boolean;
  disabled?: boolean;
  className?: string | string[];
  iconSvg?: React.ElementType<any>;
  iconClassName?: string;
}

export interface IIconProps {
  IconSvg?: React.ElementType<any>;
  iconClassName?: string;
  size: string;
}
