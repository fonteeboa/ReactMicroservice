import React from 'react';
import { useTranslation } from 'react-i18next';
import { ModalFormHandler } from '../../../../common/components/baseLayouts/modalFormHandler';
import { ItgPopupType } from './domain';
import { useAuthPopup } from './functions';

const ItgPopup: React.FC<ItgPopupType> = ({ closeModal, currentItem, data }) => {
  const { t } = useTranslation();
  const { handleSaveData, renderOptionsApiName } = useAuthPopup(closeModal, data);

  const fields = [
    { label: 'ID', name: 'ID', type: 'hidden' },
    { name: "doublelines",
      doublelines: [
        { label: t('common.name'), name: 'ApiID', type:'select', optionsFunction: renderOptionsApiName },
        { label: t('common.key'), name: 'ApiKey' },
      ]
    },
  ];

  return (
    <>
      <ModalFormHandler
        contentLabel={currentItem ? t('common.edit') : t('common.add')}
        closeModal={closeModal}
        onSave={handleSaveData}
        fields={fields}
        currentItem={currentItem}
      />
    </>
  );
};

export default ItgPopup;
