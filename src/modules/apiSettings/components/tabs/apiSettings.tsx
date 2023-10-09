import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import AddPopupSettings from '../popup/addPopupSettings';
import CustomTable from '../../../../common/components/layout/customTable';
import type { ColumnsType } from 'antd/es/table';
import { Button } from 'antd';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";
import type { DataType } from '../../types/apiSettingsTypes';
import { checkMicroservice } from '../../services/tabs/apiSettingsService';
import DownloadMicroserviceScreen from '../../../../common/components/layout/downloadMicroserviceScreen';

const ApiSettings: React.FC = () => {
  const { t } = useTranslation();

  // State for managing the visibility of the popup and current item
  const [isOpen, setIsOpen] = useState(false);
  const [currentItem, setCurrentItem] = useState<DataType | null>(null);
  const [isMicroserviceAvailable, setIsMicroserviceAvailable] = useState<boolean>(false);
  const [data, setData] = useState<DataType[]>([]);
  
  const columns: ColumnsType<DataType> = [
    {
      title: t('common.name'),
      dataIndex: 'name',
      render: (text) => <a>{text}</a>,
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
    validateMicroservice();
  }, []);

  const handleEdit = (record: DataType) => {
    // Define o item atual para edição e abre o popup
    setCurrentItem(record);
    setIsOpen(true);
  };

  const handleDelete = (id: string) => {
    // Lógica para excluir o item com o ID fornecido
    console.log(`Excluir item com ID: ${id}`);
  };

  // Função para carregar os dados do backend (substitua pelo chamada real à API)
  const fetchDataFromBackend = async () => {
    try {
      // Simule uma chamada à API (substitua isso pelo código real)
      const response = await fetch('/api/data'); 
      if (response.ok) {
        const data: DataType[] = await response.json();
        setData(data);
      } else {
        console.error('Erro ao buscar dados do backend.');
      }
    } catch (error) {
      console.error('Erro ao buscar dados do backend.', error);
    }
  };
  
  const validateMicroservice = async () => {
    const available = await checkMicroservice();
    setIsMicroserviceAvailable(available);
    fetchDataFromBackend();
  };

  const bulkActionOptions = [
    {
      label: 'Opção 1',
      action: () => {
        // Lógica para ação da Opção 1
      },
    },
    {
      label: 'Opção 2',
      action: () => {
        // Lógica para ação da Opção 2
      },
    },
  ];

  // Função para fechar o popup
  const closeModal = () => {
    setCurrentItem(null);
    setIsOpen(false);
  };

  return (
    <>
      {isMicroserviceAvailable ? (
        <>
          {isOpen && currentItem && (
            <AddPopupSettings closeModal={closeModal} currentItem={currentItem} />
          )}
          <CustomTable
            pageTitle={t("common.api_settings")}
            dataSource={data}
            columns={columns}
            bulkAction={bulkActionOptions}
          />
        </>
      ) : (
       <DownloadMicroserviceScreen microserviceName="Microservício indisponível" downloadUrl="" />
      )}
    </>
  );
  
};

export default ApiSettings;
