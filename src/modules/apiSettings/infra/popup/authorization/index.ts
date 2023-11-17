import { postService, putService } from '../../../../../common/infra/requests';
import { baseURL } from '../../constants/infraConstants';
import { Authorization } from "../../../domain";

export const insertData = async (data: Authorization) => {
    return await postService({ baseUrl: baseURL, route: '/auth', body: data });
};

export const updateData = async (data: Authorization) => {
    return await putService({ baseUrl: baseURL, route: '/auth', body: data });
};