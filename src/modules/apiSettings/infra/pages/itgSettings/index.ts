import { checkGetRequest, getService } from '../../../../../common/infra/requests';
import { getData as getAuth } from '../authSettings';
import { baseURL } from '../../constants';

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
export const getData = async (data: any) => {
    return await getService({ baseUrl: baseURL, route: '/itg', body: data });
};


export const getSelectDataServiceInfra = async () => {
    return await getAuth({});
}

export const deleteData = async (data: any) => {
    console.log(data);
    /*
    try {
        const response = await api.request({
            method: 'delete', // Assuming it's a DELETE request
            url: '/api/data',
            data: data,
            baseUrl: baseURL
        });
        // Process the response as needed
        console.log(response);
        return response; // You can return the response if needed
    } catch (error) {
        // Handle the error
        console.error(error);
        return false; // Return false in case of an error
    }
    */
};
