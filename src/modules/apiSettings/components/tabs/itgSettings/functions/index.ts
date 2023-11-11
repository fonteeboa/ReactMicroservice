import { useState, useEffect, SetStateAction } from 'react';
import { getData as getDataService } from '../../../../services/tabs/itgSettings';
import { useTranslation } from 'react-i18next';
import { DataType } from '../../../../domain';

export const useApiSettings = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentItem, setCurrentItem] = useState<DataType | null>(null);
  const [data, setData] = useState<DataType[]>([]);

  const { t } = useTranslation();

  useEffect(() => {
    fetchDataFromBackend();
  }, []);
  
  const handleEdit = (record: DataType) => {
    setCurrentItem(record);
    setIsOpen(true);
  };

  const handleDelete = (id: string) => {
    console.log(`Excluir item com ID: ${id}`);
  };

  const fetchDataFromBackend = async () => {
    const response = await getDataService([]);
    console.log(response);
    setData(response as SetStateAction<DataType[]>);
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
    t,
    handleEdit,
    handleDelete,
    closeModal,
    deleteAll,
    openModal,
  };
};