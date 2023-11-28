import { processData } from '../../../services/popup/authorization/authorizationPopupService';
import { Authorization } from '../../../domain';

export const useAuthPopup = (closeModal: () => void) => {
  const handleSaveData = async (values: Authorization) => {
    await processData(values);
    closeModal();
  };
  return { handleSaveData };
};
