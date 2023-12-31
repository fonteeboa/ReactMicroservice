import { useState, useEffect } from 'react';
import { checkMicroservice } from '../../../services/pages/general/generalPageService';
import { useTranslation } from 'react-i18next';

/**
 * Returns the settings for the Pages API.
 *
 * @return The settings for the Pages API, including the availability of the microservice and the translation function.
 */
export const usePagesApiSettings = () => {
  const [isMicroserviceAvailable, setIsMicroserviceAvailable] = useState<boolean>(true);
  const [loading, setLoading] = useState<boolean>(true);
  const { t } = useTranslation();
  useEffect(() => {
    const validateMicroservice = async () => {
      const available = await checkMicroservice()
      setLoading(false);
    /**
     * Validates the microservice by checking its availability.
     *
     * @return {Promise<void>} A promise that resolves when the validation is complete.
     */
      setIsMicroserviceAvailable(true);
    };
    validateMicroservice();
  }, []);
  return {
    t,
    isMicroserviceAvailable,
    loading
  };
};
