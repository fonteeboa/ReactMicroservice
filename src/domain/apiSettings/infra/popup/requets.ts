import { api } from "../../../../common/infra/apiRequests";
import { baseURL } from '../../constants/constants';	

/**
 * Retrieves data from the API.
 *
 * @param {any} data - The data to be sent to the API.
 * @return {void} No return value.
 */
export const insertData = (data: any) => {
    console.log(data);
    return []
    /*
    api.request({
        method: 'post',
        url: '/apiConfig',
        data: data,
        baseUrl: baseURL
    })
    */
}

export const updateData = (data: any) => {
    return [];
    /*
    console.log(data);
    api.request({
        method: 'put',
        url: '/apiConfig',
        data: data,
        baseUrl: baseURL
    })
    */
}