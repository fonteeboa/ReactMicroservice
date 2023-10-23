//import { api } from "../../../../common/infra/apiRequests";
import { baseURL } from '../../constants/constants';

/**
 * Checks the microservice.
 *
 * @return {Promise<boolean>} A boolean indicating whether the microservice is valid.
 */
export const checkMicroservice = async (): Promise<boolean> => {
    return false;
    /*
    const response = await api.request({
        method: 'get',
        url: '/health', // Adjust the URL as needed
        baseUrl: baseURL
    });
    return response === 'valid'; // Adjust this condition based on the response structure
    */
};

/**
 * Retrieves data from the API.
 *
 * @param {any} data - The data to be sent to the API.
 * @return {void} No return value.
 */
export const getData = async (data: any) => {
    console.log(data);
return [];
/*
    try {
        const response = await api.request({
            method: 'get',
            url: '/api/data',
            data: data,
            baseUrl: baseURL
        });
        // Process the response as needed
        console.log(response);
    } catch (error) {
        // Handle the error
        console.error(error);
    }
    */
};

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
