import { checkMicroservice as checkMicroserviceInfra } from '../../../infra/pages/settings';

/**
 * Checks the microservice by calling the checkMicroserviceInfra function.
 *
 * @return {Promise<boolean>} A Promise that resolves to a boolean indicating whether the microservice check is successful.
 */
export const checkMicroservice = async (): Promise<boolean> => {
    return checkMicroserviceInfra();
}
