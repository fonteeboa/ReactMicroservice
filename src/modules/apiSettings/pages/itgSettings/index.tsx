import React from 'react';
import ItgPopup from '../../popups/itgPopup';
import CustomTable from '../../../../common/components/base-layouts/customTable';
import { useApiSettings } from './functions';
import type { ColumnsType } from 'antd/es/table';
import { Button } from 'antd';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";
import type { DataType } from '../../domain';

const ItgSettings: React.FC = () => {
  const { isOpen, currentItem, data, t, closeModal, deleteAll, openModal, handleEdit, handleDelete} = useApiSettings();

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
    {isOpen && ( <ItgPopup closeModal={closeModal} currentItem={currentItem} /> )}
    <CustomTable
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
