import { 
    checkMicroservice as checkMicroserviceInfra,
    getData as getDataIInfra,
    getSelectDataServiceInfra,
    deleteAll as deleteAllInfra,
    deleteData as deleteDataInfra,
} from '../../../infra/pages/integration/integrationPageInfra';
import { Integration } from '../../../domain/'

/**
 * Checks the microservice by calling the checkMicroserviceInfra function.
 *
 * @return {Promise<boolean>} A Promise that resolves to a boolean indicating whether the microservice check is successful.
 */
export const checkMicroservice = async (): Promise<boolean> => {
    return checkMicroserviceInfra();
}

/**
 * Retrieves data using the provided input and logs the response.
 *
 * @param {any} data - The input data to retrieve.
 * @return {Promise<void>} - A Promise that resolves to nothing.
 */
export const getData = async (data?: Integration) => {
    return await getDataIInfra(data);
}

export const getSelectDataService = async () => {
    return await getSelectDataServiceInfra();
}

export const deleteData = async (data: Integration): Promise<boolean> => {
    return await deleteDataInfra(data);
}


export const deleteAll = async (data: Integration[]): Promise<boolean> => {
    return await deleteAllInfra(data);
}

