import { DataType } from '../../../domain';

export type ItgPopupType = {
    closeModal: () => void;
    currentItem: any;
    data: DataType[];
};