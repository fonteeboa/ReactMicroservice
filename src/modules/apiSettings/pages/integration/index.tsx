import React from 'react';
import ItgPopup from '../../popups/integration';
import DynamicTable from '../../../../common/components/baseLayouts/dynamicTable';
import { useApiSettings } from './functions';
import type { ColumnsType } from 'antd/es/table';
import { Button } from 'antd';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";
import type { DataType } from '../../domain';

const ItgSettings: React.FC = () => {
  const { isOpen, currentItem, data, dataSelect, t, closeModal, deleteAll, openModal, handleEdit, handleDelete} = useApiSettings();

  const columns: ColumnsType<DataType> = [
    {
      title: t('common.name'),
      dataIndex: 'ApiID',
      render: (text) => <p>{text}</p>,
    },
    {
      title: t('common.key'),
      dataIndex: 'ApiKey',
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
    {isOpen && ( <ItgPopup closeModal={closeModal} currentItem={currentItem} data={dataSelect} /> )}
    <DynamicTable
      rowSelectionBoolean={true}
      dataSource={data}
      columns={columns}
      deleteAction={deleteAll}
      openModalAction={openModal}
    />
  </>
  );
};

export default ItgSettings;
