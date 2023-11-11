import { processData } from '../../../services/popup/authPopup';

export const useAuthPopup = (closeModal: any) => {
  const handleSaveData = async (values : any) => {
      await processData(values);
      closeModal();
  };
    
  return { handleSaveData };
};
