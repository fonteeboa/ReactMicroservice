import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import AddPopupSettings from '../popup/addPopupSettings';
import CustomTable from '../../../../common/components/base-layouts/customTable';
import type { ColumnsType } from 'antd/es/table';
import { Button } from 'antd';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";
import type { DataType } from '../../types/apiSettingsTypes';
import { checkMicroservice, getData as getDataService } from '../../services/tabs/apiSettingsService';
import DownloadMicroserviceScreen from '../../../../common/components/layout/downloadMicroserviceScreen';

const ApiSettings: React.FC = () => {
  const { t } = useTranslation();

  // State for managing the visibility of the popup and current item
  const [isOpen, setIsOpen] = useState(false);
  const [currentItem, setCurrentItem] = useState<DataType | null>(null);
  const [isMicroserviceAvailable, setIsMicroserviceAvailable] = useState<boolean>(true);
  const [data, setData] = useState<DataType[]>([]);
  
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
      render: (record) => (
        <div>
          <Button icon={<FontAwesomeIcon icon={faEdit} />} onClick={() => handleEdit(record.key)} />
          <Button icon={<FontAwesomeIcon icon={faTrash} />} onClick={() => handleDelete(record.key)} />
        </div>
      ),
    },
  ];

  useEffect(() => {

    const validateMicroservice = async () => {
      const available = await checkMicroservice();
      //setIsMicroserviceAvailable(true);
      setIsMicroserviceAvailable(available);
      if (available) fetchDataFromBackend();
    };

    validateMicroservice();
  }, []);

  const handleEdit = (record: DataType) => {
    setCurrentItem(record);
    setIsOpen(true);
  };

  const handleDelete = (id: string) => {
    console.log(`Excluir item com ID: ${id}`);
  };

  // Função para carregar os dados do backend (substitua pelo chamada real à API)
  const fetchDataFromBackend = async () => {
    const response = await getDataService([]);
    console.log(response);
    //setData(response);
  };

  // Função para fechar o popup
  const openModal = (id: any) => {
    //if (id) setCurrentItem(null);
    setIsOpen(true);
  };

  // Função para fechar o popup
  const closeModal = () => {
    setCurrentItem(null);
    setIsOpen(false);
  };

  const deleteAll = () => {
    // Lógica para excluir todos os itens
    console.log('Excluir todos os itens');
  }

  const bulkActionOptions = [
    {
      label: t("common.add"),
      action: openModal,
      type: "primary",
    },
    {
      label: t("common.delete.select"),
      confirmMessage: t('common.delete.confirmation.multiple'),
      action: deleteAll,
      type: "danger",
    },
  ];

  return (
    <>
      {isMicroserviceAvailable ? (
        <>
          {isOpen && ( <AddPopupSettings closeModal={closeModal} currentItem={currentItem} /> )}
          
          <CustomTable
            pageTitle={t("common.api_settings")}
            dataSource={data}
            columns={columns}
            bulkAction={bulkActionOptions}
          />
        </>
      ) : (
       <DownloadMicroserviceScreen microserviceName={t("common.api_settings")} downloadUrl="" />
      )}
    </>
  );
  
};

export default ApiSettings;
