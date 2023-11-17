import React from 'react';
import { processData } from '../../../services/popup/integration/integrationPopupService.tsx';
import { Integration } from '../../../domain';

export const useAuthPopup = (closeModal: () => void, data: Integration[]) => {

  const handleSaveData = async (values: Integration) => {
      await processData(values);
      closeModal();
  };

  const renderOptionsApiName = () => {
    return data.map((item: Integration) => {
      return (
        <option key={item.ID} value={item.ID}>
          {item.Name}
        </option>
      );
    })
  }

  return { handleSaveData, renderOptionsApiName };
};

