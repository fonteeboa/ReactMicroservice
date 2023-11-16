import {
    getData as getDataIInfra
} from '../../../infra/pages/authorization/authorizationPageInfra';



/**
 * Retrieves data using the provided input and logs the response.
 *
 * @param {any} data - The input data to retrieve.
 * @return {Promise<void>} - A Promise that resolves to nothing.
 */
export const getData = async (data: any) => {
    return await getDataIInfra(data);
}
