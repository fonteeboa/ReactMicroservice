import React from 'react';
import AddPopupSettings from '../../popup/AddPopupSettings';
import CustomTable from '../../../../../common/components/base-layouts/customTable';
import DownloadMicroserviceScreen from '../../../../../common/components/layout/downloadMicroserviceScreen';
import { useApiSettings } from './functions';

import type { ColumnsType } from 'antd/es/table';
import { Button } from 'antd';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";
import type { DataType } from '../../../domain';

const ApiSettings: React.FC = () => {
  const { isOpen, currentItem, isMicroserviceAvailable, data, t, closeModal, deleteAll, openModal, handleEdit, handleDelete} = useApiSettings();

  const columns: ColumnsType<DataType> = [
    {
      title: t('common.name'),
      dataIndex: 'name',
      render: (text) => <p>{text}</p>,
    },
    {
      title: t('common.key'),
      dataIndex: 'key',
    },
    {
      title: t('common.actions'),
      render: (record) => (<>
          <Button icon={<FontAwesomeIcon icon={faEdit} />} onClick={() => handleEdit(record.key)} />
          <Button icon={<FontAwesomeIcon icon={faTrash} />} onClick={() => handleDelete(record.key)} />
      </>),
    },
  ];

  return (
    <>
      {isMicroserviceAvailable ? (
        <>
          {isOpen && (
            <AddPopupSettings closeModal={closeModal} currentItem={currentItem} />
          )}
          
          <CustomTable
            pageTitle={t("common.api_settings")}
            dataSource={data}
            columns={columns}
            deleteAction={deleteAll}
            openModalAction={openModal}
          />
        </>
      ) : (
       <DownloadMicroserviceScreen microserviceName={t("common.api_settings")} downloadUrl="https://github.com/galvao845/go-api-settings" />
      )}
    </>
  );
};

export default ApiSettings;
