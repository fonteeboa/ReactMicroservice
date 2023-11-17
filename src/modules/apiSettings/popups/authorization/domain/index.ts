import { Authorization } from "../../../domain";

export type AuthPopupType = {
    closeModal: () => void;
    currentItem: Authorization | null;
};