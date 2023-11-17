import { Integration } from '../../../domain';

export type ItgPopupType = {
    closeModal: () => void;
    currentItem: any;
    data: Integration[];
};