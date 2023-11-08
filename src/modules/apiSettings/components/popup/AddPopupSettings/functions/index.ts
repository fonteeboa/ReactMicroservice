import { useState, useEffect } from 'react';
import { processData } from '../../../../services/popup/AddPopupSettings';

export const useAddPopupSettings = (closeModal: any) => {
  const handleSaveData = async (values : any) => {
      console.log(values);
      await processData(values);
      closeModal();
  };
    
  return {
    handleSaveData
  };
};
