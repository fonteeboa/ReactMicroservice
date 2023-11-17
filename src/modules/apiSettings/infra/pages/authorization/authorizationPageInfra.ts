import { checkGetRequest, getService } from '../../../../../common/infra/requests';
import { baseURL } from '../../constants/infraConstants';

/**
 * Checks the microservice.
 *
 * @return {Promise<boolean>} A boolean indicating whether the microservice is valid.
 */
export const checkMicroservice = async (): Promise<boolean> => {
    return await checkGetRequest({ baseUrl: baseURL, route: '/health' });
};

/**
 * Retrieves data from the API.
 *
 * @param {any} data - The data to be sent to the API.
 * @return {void} No return value.
 */
export const getData = async () => {
    return await getService({ baseUrl: baseURL, route: '/auth' });
};