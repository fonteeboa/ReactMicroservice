import { useState, useEffect, SetStateAction } from 'react';
import { 
  getData as getDataService, getSelectDataService, 
  deleteData as deleteDataService, 
  deleteAll as deleteAllService
} from '../../../services/pages/integration/integrationPageService';
import { useTranslation } from 'react-i18next';
import { Integration } from '../../../domain';

export const useApiSettings = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentItem, setCurrentItem] = useState<Integration | null>(null);
  const [data, setData] = useState<Integration[]>([]);
  const [dataSelect, setSelectData] = useState<Integration[]>([]);
  type T = Integration;
  const { t } = useTranslation();

  useEffect(() => {
    fetchDataFromBackend();
    fetchDataSelectOptions();
  }, []);
  

  const fetchDataFromBackend = async () => {
    const response = await getDataService();
    setData(response as SetStateAction<Integration[]>);
  };

  const fetchDataSelectOptions = async () => {
    const response = await getSelectDataService();
    setSelectData(response as SetStateAction<Integration[]>);
  }

  const handleEdit = (record: Integration) => {
    setCurrentItem(record);
    setIsOpen(true);
  };

  const handleDelete = (record: Integration) => {
    deleteDataService(record);
    fetchDataFromBackend();
  };

  const closeModal = () => {
    setCurrentItem(null);
    setIsOpen(false);
    fetchDataFromBackend();
  };

  const deleteAll = (arrayIds: T[] = []) => {
    deleteAllService(arrayIds);
    fetchDataFromBackend();
  };

  const openModal = () => {
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