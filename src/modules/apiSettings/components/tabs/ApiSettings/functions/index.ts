import { useState, useEffect, SetStateAction } from 'react';
import { checkMicroservice, getData as getDataService } from '../../../../services/tabs/apiSettings';
import { useTranslation } from 'react-i18next';
import { DataType } from '../../../../domain';

export const useApiSettings = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentItem, setCurrentItem] = useState<DataType | null>(null);
  const [isMicroserviceAvailable, setIsMicroserviceAvailable] = useState<boolean>(true);
  const [data, setData] = useState<DataType[]>([]);

  const { t } = useTranslation();

  useEffect(() => {
    const validateMicroservice = async () => {
      const available = await checkMicroservice();
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
    isMicroserviceAvailable,
    data,
    t,
    handleEdit,
    handleDelete,
    closeModal,
    deleteAll,
    openModal,
  };
};
