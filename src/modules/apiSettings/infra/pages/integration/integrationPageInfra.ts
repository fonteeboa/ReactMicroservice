import { checkGetRequest, getService, deleteService, deleteWithBodyService} from '../../../../../common/infra/requests';
import { getData as getAuth } from '../authorization/authorizationPageInfra';
import { baseURL } from '../../constants/infraConstants';
import { Integration } from '../../../domain';
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
export const getData = async (data?: Integration) => {
    return await getService({ baseUrl: baseURL, route: '/itg', body: data });
};


export const getSelectDataServiceInfra = async () => {
    return await getAuth({});
}

export const deleteData = async (data: Integration): Promise<boolean> => {
    return await deleteService({ baseUrl: baseURL, route: '/itg', body: data});
};

export const deleteAll = async (data: Integration[]): Promise<boolean> => {
    return await deleteWithBodyService({ baseUrl: baseURL, route: '/itgAll', body: data});
}