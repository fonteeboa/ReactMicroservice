import { processData } from '../../../services/popup/authorization/authorizationPopupService';

export const useAuthPopup = (closeModal: any) => {
  const handleSaveData = async (values : any) => {
      console.log(values);
      await processData(values);
      closeModal();
  };
    
  return { handleSaveData };
};
