import {
    getData as getDataIInfra
} from '../../../infra/pages/authorization/authorizationPageInfra';

/**
 * Retrieves data from the infrastructure.
 *
 * @return {Promise<any>} A promise that resolves with the retrieved data.
 */
export const getData = async () => {
    return await getDataIInfra();
}
