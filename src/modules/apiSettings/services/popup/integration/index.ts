import {
    insertData, updateData,
} from '../../../infra/popup/itgPopup';


export const processData = async (data: any) => {   
    console.log(data);

    if (typeof data.ID !== "number") {
        insertData(data);
    } else {
        updateData(data);
    }
}
