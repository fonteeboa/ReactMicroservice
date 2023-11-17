import { useState, useEffect, SetStateAction } from 'react';
import { getData as getDataService } from '../../../services/pages/authorization/authorizationPageService';
import { useTranslation } from 'react-i18next';
import { Authorization } from '../../../domain';

export const useApiSettings = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentItem, setCurrentItem] = useState<Authorization | null>(null);
  const [data, setData] = useState<Authorization[]>([]);

  const { t } = useTranslation();

  const handleEdit = (record: Authorization) => {
    setCurrentItem(record);
    setIsOpen(true);
  };
  
  const fetchDataFromBackend = async () => {
    const response = await getDataService();
    setData(response as SetStateAction<Authorization[]>);
  };

  const closeModal = () => {
    setCurrentItem(null);
    setIsOpen(false);
    fetchDataFromBackend();
  };

  const openModal = () => {
    setIsOpen(true);
  };

  useEffect(() => {
    fetchDataFromBackend();
  }, []);

  return {
    isOpen,
    currentItem,
    data,
    t,
    handleEdit,
    closeModal,
    openModal,
  };
};