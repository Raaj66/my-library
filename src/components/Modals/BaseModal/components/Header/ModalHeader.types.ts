import { WithChildren } from 'helper/types/WithChildren.types';
import { ModalType } from 'components/Modals/IcnModal.types';

export interface ModalHeaderProps extends WithChildren {
  titleStyle?: React.CSSProperties;
  title: string;
  description?: string;
  descriptionUuid: string;
  headerUuid: string;
  modalType?: ModalType;
}
