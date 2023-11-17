import { Integration } from '../../../domain';

export type ItgPopupType = {
    closeModal: () => void;
    currentItem: Integration | null;
    data: Integration[];
};