import React from 'react';
import { Result, Button } from 'antd';

interface DownloadMicroserviceScreenProps {
  microserviceName: string;
  downloadUrl: string;
}

const DownloadMicroserviceScreen: React.FC<DownloadMicroserviceScreenProps> = ({
  microserviceName,
  downloadUrl,
}) => {
  return (
    <div className='centered-content'>
      <Result
        status="warning"
        title="Microserviço Indisponível"
        subTitle={`O microserviço "${microserviceName}" não está atualmente disponível.`}
        extra={
          <Button type="primary" href={downloadUrl} target="_blank" rel="noopener noreferrer">
            Baixar o Microserviço
          </Button>
        }
      />
    </div>
  );
};

export default DownloadMicroserviceScreen;
