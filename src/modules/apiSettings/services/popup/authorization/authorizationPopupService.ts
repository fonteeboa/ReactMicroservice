import { insertData, updateData } from "../../../infra/popup/authorization";
import { Authorization } from '../../../domain';

export const processData = async (data: Authorization) => {   
    if (typeof data.ID !== "number") {
        insertData(data);
    } else {
        updateData(data);
    }
}
