import { postService, putService } from '../../../../../common/infra/requests';
import { baseURL } from '../../constants';

export const insertData = async (data: any) => {
    return await postService({ baseUrl: baseURL, route: '/auth', body: data });
};

export const updateData = async (data: any) => {
    return await putService({ baseUrl: baseURL, route: '/auth', body: data });
};