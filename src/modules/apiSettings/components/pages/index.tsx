import React from 'react';
import { Tabs, Card } from 'antd';
import type { TabsProps } from 'antd';
import DownloadMicroserviceScreen from '../../../../common/components/layout/downloadMicroserviceScreen';
import { usePagesApiSettings } from './functions';
import AuthSettings from '../tabs/authSettings';
import ItgSettings from '../tabs/itgSettings';

const ApiConfigPages: React.FC = () => {
  const { isMicroserviceAvailable, t} = usePagesApiSettings();

  const items: TabsProps['items'] = [
    {
      key: '1',
      label: t("common.authorization.settings"),
      children: <ItgSettings />,
    },
    {
      key: '2',
      label: t("common.integration.settings"),
      children: <AuthSettings />,
    }
  ];

  return (<>
    {isMicroserviceAvailable ? 
      <Card title={null} className="grid-container">
        <Tabs defaultActiveKey="1" items={items} />
      </Card>
    :
     <DownloadMicroserviceScreen microserviceName={t("common.api_settings")} downloadUrl="https://github.com/galvao845/go-api-settings" />
    }
  </>)
}




export default ApiConfigPages;