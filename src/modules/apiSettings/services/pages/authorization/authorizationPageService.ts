import {
    getData as getDataIInfra
} from '../../../infra/pages/authorization/authorizationPageInfra';

export const getData = async () => {
    return await getDataIInfra();
}
