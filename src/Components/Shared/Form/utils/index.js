import { PRIVATE_FIELD_MASK_ATTRIBUTE } from '../../../../constants';
import FieldGlow from './FieldGlow.jsx';

export const privateFieldMaskAttributes = () => ({ [PRIVATE_FIELD_MASK_ATTRIBUTE]: 'true' });
export const noValue = (field) => field === '' || field === undefined || field === null;


export { FieldGlow };