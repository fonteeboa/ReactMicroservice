import { 
    checkMicroservice as checkMicroserviceInfra,
    getData as getDataIInfra,
    getSelectDataServiceInfra,
    deleteAll as deleteAllInfra,
    deleteData as deleteDataInfra,
} from '../../../infra/pages/integration/integrationPageInfra';
import { Integration } from '../../../domain/'


/**
 * Retrieves data using the provided input and logs the response.
 *
 * @param {any} data - The input data to retrieve.
 * @return {Promise<void>} - A Promise that resolves to nothing.
 */
export const getData = async (data?: Integration) => {
    return await getDataIInfra(data);
}

/**
 * Retrieves the select data service.
 *
 * @return {Promise<any>} The select data service.
 */
export const getSelectDataService = async () => {
    return await getSelectDataServiceInfra();
}

/**
 * Deletes the given Integration data.
 *
 * @param {Integration} data - The Integration data to delete.
 * @return {Promise<boolean>} A Promise that resolves to `true` if the data was deleted successfully, or `false` otherwise.
 */
export const deleteData = async (data: Integration): Promise<boolean> => {
    return await deleteDataInfra(data);
}


/**
 * Deletes all the integrations in the given array.
 *
 * @param {Integration[]} data - The array of integrations to be deleted.
 * @return {Promise<boolean>} A promise that resolves to a boolean indicating if all the integrations were successfully deleted.
 */
export const deleteAll = async (data: Integration[]): Promise<boolean> => {
    return await deleteAllInfra(data);
}

