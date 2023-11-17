import { postService, putService } from '../../../../../common/infra/requests';
import { baseURL } from '../../constants/infraConstants';
import { Integration } from '../../../domain';

export const insertData = async (data: Integration) => {
    return await postService({ baseUrl: baseURL, route: '/itg', body: data });
};

export const updateData = async (data: Integration) => {
    return await putService({ baseUrl: baseURL, route: '/itg', body: data });
};
