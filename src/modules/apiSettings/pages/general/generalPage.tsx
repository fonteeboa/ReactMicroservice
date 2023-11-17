import React from 'react';
import { Tabs, Card, TabsProps } from 'antd';
import DownloadMicroserviceScreenWithLoading from '../../../../common/components/layout/downloadMicroserviceScreenWithLoading/downloadMicroserviceScreenWithLoading';
import { usePagesApiSettings } from './functions';
import AuthSettings from '../authorization/authorizationPage';
import ItgSettings from '../integration/integrationPage';

const ApiConfigPages: React.FC = () => {
  const { t, isMicroserviceAvailable, loading } = usePagesApiSettings();

  const items: TabsProps['items'] = [
    {
      key: '1',
      label: t("common.authorization.settings"),
      children: <AuthSettings />,
    },
    {
      key: '2',
      label: t("common.integration.settings"),
      children: <ItgSettings />,
    },
  ];

  return (<>
    {isMicroserviceAvailable ? 
      <Card title={null} className="grid-container">
        <Tabs defaultActiveKey="1" items={items} />
      </Card>
    :
     <DownloadMicroserviceScreenWithLoading loading={loading} microserviceName={t("common.api_settings")} downloadUrl="https://github.com/galvao845/go-api-settings" />
    }
  </>)
}




export default ApiConfigPages;