import { useState, useEffect } from 'react';
import { checkMicroservice } from '../../../services/pages';
import { useTranslation } from 'react-i18next';

/**
 * Returns the settings for the Pages API.
 *
 * @return {{ isMicroserviceAvailable: boolean, t: any }} The settings for the Pages API, including the availability of the microservice and the translation function.
 */
export const usePagesApiSettings = () => {
  const [isMicroserviceAvailable, setIsMicroserviceAvailable] = useState<boolean>(true);
  const { t } = useTranslation();
  useEffect(() => {
    const validateMicroservice = async () => {
      const available = await checkMicroservice();
    /**
     * Validates the microservice by checking its availability.
     *
     * @return {Promise<void>} A promise that resolves when the validation is complete.
     */
      setIsMicroserviceAvailable(available);
    };
    validateMicroservice();
  }, []);
  return {
    isMicroserviceAvailable, t
  };
};
