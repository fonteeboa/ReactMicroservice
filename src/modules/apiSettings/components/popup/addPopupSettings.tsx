import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { CustomModal } from '../../../../common/components/modal/customModal';
import { processData } from  '../../services/popup/addPopupService';

type ReportsModalProps = {
  closeModal: (form: any) => void;
  currentItem: any;
};

const AddPopupSettings: React.FC<ReportsModalProps> = ({
  closeModal,
  currentItem
}) => {
    const { t } = useTranslation();

    const handleSaveData = async (data: any) => {
        console.log(data);
        try {
            let request = await processData(data);
            closeModal(false);
        } catch (err) {
            console.error(err);
        }
    };

    const fields = [
        {label: t('device.table.name'), name: 'name'},
        {label: t('device.device_detail.system.description'), name: 'description'},
        {label: t('common.scheduled'), name: 'scheduled', type: 'date'},
        {label: 'ID', name: 'ID', type: 'hidden'},
    ];

    return (<>
        <CustomModal
            contentLabel={t("common.report")}
            closeModal={closeModal}
            onSave={handleSaveData}
            fields={fields}
            currentItem={currentItem}
        />
    </>);
};

export default AddPopupSettings;
