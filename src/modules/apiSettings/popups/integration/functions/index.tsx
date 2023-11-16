import { processData } from '../../../services/popup/integration';
import { DataType } from '../../../domain';

export const useAuthPopup = (closeModal: any, data: DataType[]) => {

  const handleSaveData = async (values : any) => {
      await processData(values);
      closeModal();
  };

  const renderOptionsApiName = () => {
    return data.map((item: DataType) => {
      return (
        <option key={item.ID} value={item.ID}>
          {item.Name}
        </option>
      );
    })
  }

  return { handleSaveData, renderOptionsApiName };
};

