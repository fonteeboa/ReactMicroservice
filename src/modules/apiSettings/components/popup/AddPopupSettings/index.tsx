import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { CustomModal } from '../../../../../common/components/modal/customModal';
import { processData } from '../../../services/popup/AddPopupSettings';

type AddPopupSettingsType = {
  closeModal: () => void; // Remove a passagem do 'form'
  currentItem: any;
};

const AddPopupSettings: React.FC<AddPopupSettingsType> = ({ closeModal, currentItem }) => {
  const { t } = useTranslation();

  const handleSaveData = async (values : any) => {
      console.log(values);
      await processData(values);
      closeModal();
  };
  
  const fields = [
    { label: 'ID', name: 'ID', type: 'hidden' },
    { name: "doublelines",
      doublelines: [
        { label: t('common.name'), name: 'api_name', type:'select'},
        { label: t('common.key'), name: 'api_key' },
      ]
    },
  ];

  return (
    <>
      <CustomModal
        contentLabel={currentItem ? t('common.edit') : t('common.add')}
        closeModal={closeModal}
        onSave={handleSaveData}
        fields={fields}
        currentItem={currentItem}
        
      />
    </>
  );
};

export default AddPopupSettings;
