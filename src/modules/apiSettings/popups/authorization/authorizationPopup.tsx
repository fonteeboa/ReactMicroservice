import React from 'react';
import { useTranslation } from 'react-i18next';
import { ModalFormHandler } from '../../../../common/components/baseLayouts/modals/modalFormHandler';
import { AuthPopupType } from './domain';
import { useAuthPopup } from './functions';

const AuthPopup: React.FC<AuthPopupType> = ({ closeModal, currentItem }) => {
  const { t } = useTranslation();
  const { handleSaveData } = useAuthPopup(closeModal);
  
  const fields = [
    { label: 'ID', name: 'ID', type: 'hidden' },
    { label: t('common.name'), name: 'Name', rules: [{ required: true, message: t("common.required.field") }] },
    { label: t('common.description'), name: 'Description', type: 'area', rules: [{ required: true, message: t("common.required.field") }] }
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

export default AuthPopup;
