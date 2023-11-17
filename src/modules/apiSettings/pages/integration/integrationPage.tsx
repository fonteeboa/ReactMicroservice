import React from 'react';
import ItgPopup from '../../popups/integration/integrationPopup';
import DynamicTable from '../../../../common/components/baseLayouts/dynamicTable';
import { useApiSettings } from './functions';
import type { ColumnsType } from 'antd/es/table';
import { Button } from 'antd';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";
import type { Integration } from '../../domain';

const ItgSettings: React.FC = () => {
  const { isOpen, currentItem, data, dataSelect, t, closeModal, deleteAll, openModal, handleEdit, handleDelete} = useApiSettings();

  const columns: ColumnsType<Integration> = [
    {
      title: t('common.name'),
      dataIndex: 'AuthorizationName',
      render: (text) => <p>{text}</p>,
    },
    {
      title: t('common.key'),
      dataIndex: 'ApiKey',
    },
    {
      title: t('common.actions'),
      render: (record) => (<>
          <Button icon={<FontAwesomeIcon icon={faEdit} />} onClick={() => handleEdit(record)} />
          <Button icon={<FontAwesomeIcon icon={faTrash} />} onClick={() => handleDelete(record)} />
      </>),
    },
  ];

  const transformedData = data.map(item => ({
    ...item,
    AuthorizationName: item.Authorization.Name,
  }));

  return (
    <>
      {isOpen && ( <ItgPopup closeModal={closeModal} currentItem={currentItem} data={dataSelect} /> )}
      
      <DynamicTable
        rowSelectionBoolean={true}
        dataSource={transformedData}
        columns={columns}
        deleteAction={deleteAll}
        openModalAction={openModal}
      />
    </>
  );
};

export default ItgSettings;
