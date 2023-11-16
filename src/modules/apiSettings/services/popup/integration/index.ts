import {
    insertData, updateData,
} from '../../../infra/popup/integration';


export const processData = async (data: any) => {   
    console.log(data);

    if (typeof data.ID !== "number") {
        insertData(data);
    } else {
        updateData(data);
    }
}
