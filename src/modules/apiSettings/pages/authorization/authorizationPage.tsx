import React from 'react';
import DynamicTable from '../../../../common/components/baseLayouts/dynamicTable';
import { useApiSettings } from './functions';
import type { ColumnsType } from 'antd/es/table';
import type { Authorization } from '../../domain';
import AuthPopup from '../../popups/authorization/authorizationPopup';

const AuthSettings: React.FC = () => {
  const { isOpen, currentItem, data, t, closeModal, openModal} = useApiSettings();

  const columns: ColumnsType<Authorization> = [
    {
      title: t('common.name'),
      dataIndex: 'Name',
      render: (text) => <p>{text}</p>,
    },
    {
      title: t('common.description'),
      dataIndex: 'Description',
    }
  ];

  return (
    <>
      {isOpen && ( <AuthPopup closeModal={closeModal} currentItem={currentItem} /> )}
      
      <DynamicTable
        rowSelectionBoolean={false}
        dataSource={data}
        columns={columns}
        openModalAction={openModal}
        showBulkActionOptions={false}
      />
    </>
  );
};

export default AuthSettings;
