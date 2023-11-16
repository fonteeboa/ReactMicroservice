import React from 'react';
import DynamicTable from '../../../../common/components/baseLayouts/dynamicTable';
import { useApiSettings } from './functions';
import type { ColumnsType } from 'antd/es/table';
import type { DataType } from '../../domain';
import AuthPopup from '../../popups/authorization/authorizationPopup';

const AuthSettings: React.FC = () => {
  const { isOpen, currentItem, data, t, closeModal, deleteAll, openModal} = useApiSettings();

  const columns: ColumnsType<DataType> = [
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
        deleteAction={deleteAll}
        openModalAction={openModal}
      />
  </>
  );
};

export default AuthSettings;
