import { 
    checkMicroservice as checkMicroserviceInfra,
    getData as getDataIInfra
} from '../../infra/requets';

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
export const getData = async (data: any) => {
    let response = await getDataIInfra(data);
    console.log(response);
}
