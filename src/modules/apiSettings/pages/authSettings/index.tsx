import React from 'react';
import CustomTable from '../../../../common/components/base-layouts/customTable';
import { useApiSettings } from './functions';
import type { ColumnsType } from 'antd/es/table';
import { Button } from 'antd';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit } from "@fortawesome/free-solid-svg-icons";
import type { DataType } from '../../domain';
import AuthPopup from '../../popups/authPopup';

const AuthSettings: React.FC = () => {
  const { isOpen, currentItem, data, t, closeModal, deleteAll, openModal, handleEdit} = useApiSettings();

  const columns: ColumnsType<DataType> = [
    {
      title: t('common.name'),
      dataIndex: 'Name',
      render: (text) => <p>{text}</p>,
    },
    {
      title: t('common.description'),
      dataIndex: 'Description',
    },
    {
      title: t('common.actions'),
      render: (record) => (<>
          <Button icon={<FontAwesomeIcon icon={faEdit} />} onClick={() => handleEdit(record)} />
      </>),
    },
  ];

  return (
    <>
        {isOpen && ( <AuthPopup closeModal={closeModal} currentItem={currentItem} /> )}
      <CustomTable
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
