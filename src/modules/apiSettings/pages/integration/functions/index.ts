import { useState, useEffect, SetStateAction } from 'react';
import { getData as getDataService, getSelectDataService } from '../../../services/pages/integration';
import { useTranslation } from 'react-i18next';
import { DataType } from '../../../domain';

export const useApiSettings = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentItem, setCurrentItem] = useState<DataType | null>(null);
  const [data, setData] = useState<DataType[]>([]);
  const [dataSelect, setSelectData] = useState<DataType[]>([]);

  const { t } = useTranslation();

  useEffect(() => {
    fetchDataFromBackend();
    fetchDataSelectOptions();
  }, []);
  

  const fetchDataFromBackend = async () => {
    const response = await getDataService([]);
    setData(response as SetStateAction<DataType[]>);
  };

  const fetchDataSelectOptions = async () => {
    const response = await getSelectDataService();
    setSelectData(response as SetStateAction<DataType[]>);
  }

  const handleEdit = (record: DataType) => {
    setCurrentItem(record);
    setIsOpen(true);
  };

  const handleDelete = (id: string) => {
    console.log(`Excluir item com ID: ${id}`);
  };

  const closeModal = () => {
    setCurrentItem(null);
    setIsOpen(false);
  };

  const deleteAll = (arrayIds: any = []) => {
    console.log(arrayIds);
    // Lógica para excluir todos os itens
    console.log('Excluir todos os itens');
  };

  const openModal = () => {
    console.log('action');
    //if (id) setCurrentItem(null);
    setIsOpen(true);
  };

  return {
    isOpen,
    currentItem,
    data,
    dataSelect,
    t,
    handleEdit,
    handleDelete,
    closeModal,
    deleteAll,
    openModal,
  };
};