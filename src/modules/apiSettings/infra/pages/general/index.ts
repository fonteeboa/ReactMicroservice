import { checkGetRequest } from '../../../../../common/infra/requests'
import { baseURL } from '../../constants';

/**
 * Checks the microservice.
 *
 * @return {Promise<boolean>} A boolean indicating whether the microservice is valid.
 */
export const checkMicroservice = async (): Promise<boolean> => {
    return await checkGetRequest({ baseUrl: baseURL, route: '/health' });
};
