import { Integration } from '../../../domain';
import {
    insertData, updateData,
} from '../../../infra/popup/integration';

export const processData = async (data: Integration) => {   
    if (typeof data.ID !== "number") {
        insertData(data);
    } else {
        updateData(data);
    }
}
