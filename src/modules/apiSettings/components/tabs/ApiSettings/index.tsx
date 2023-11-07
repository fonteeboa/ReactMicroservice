import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import AddPopupSettings from '../../popup/AddPopupSettings';
import type { ColumnsType } from 'antd/es/table';
import { Button } from 'antd';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";
import type { DataType } from '../../../domain';
import { checkMicroservice, getData as getDataService } from '../../../services/tabs/ApiSettings';
import CustomTable from '../../../../../common/components/base-layouts/customTable';
import DownloadMicroserviceScreen from '../../../../../common/components/layout/downloadMicroserviceScreen';

const ApiSettings: React.FC = () => {
  const { t } = useTranslation();

  // State for managing the visibility of the popup and current item
  const [isOpen, setIsOpen] = useState(false);
  const [currentItem, setCurrentItem] = useState<DataType | null>(null);
  const [isMicroserviceAvailable, setIsMicroserviceAvailable] = useState<boolean>(true);
  const [data, setData] = useState<DataType[]>([]);

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
  const closeModal = () => {
    setCurrentItem(null);
    setIsOpen(false);
  };

  const deleteAll = (arrayIds: any = []) => {
    console.log(arrayIds);
    // Lógica para excluir todos os itens
    console.log('Excluir todos os itens');
  }

  // Função para fechar o popup
  const openModal = () => {
    console.log('action');
    //if (id) setCurrentItem(null);
    setIsOpen(true);
  };

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

  return (
    <>
      {isMicroserviceAvailable ? (
        <>
          {isOpen && ( <AddPopupSettings closeModal={closeModal} currentItem={currentItem} /> )}
          
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
