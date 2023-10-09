import { api } from "../../../common/infra/apiRequests";
import { checkMicroservice as checkMicroserviceHelpers } from '../../../common/helpers/utils';
import { baseURL } from '../constants/constants';	

/**
 * Checks the microservice.
 *
 * @return {Promise<boolean>} A boolean indicating whether the microservice is valid.
 */
export const checkMicroservice = async (): Promise<boolean> => {
    return checkMicroserviceHelpers(baseURL);
}

/**
 * Retrieves data from the API.
 *
 * @param {any} data - The data to be sent to the API.
 * @return {void} No return value.
 */
export const getData = (data: any) => {
    console.log(data);

    api.request({
        method: 'get',
        url: '/api/data',
        data: data,
        baseUrl: baseURL
    })
}