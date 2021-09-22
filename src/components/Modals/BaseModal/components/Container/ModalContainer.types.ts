import { WithChildren } from 'helper/types/WithChildren.types';
import { ModalType } from 'components/Modals/IcnModal.types';

export interface ModalContainerProps extends WithChildren {
  modalType?: ModalType;
  subhead?: string;
  bodyText?: string;
}
