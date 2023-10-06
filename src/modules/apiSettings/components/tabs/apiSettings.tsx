import React, { useState } from 'react';
import { Form, Input, Button, Row, Col, Card, Alert } from 'antd';

const { TextArea } = Input;

const ApiConfigScreen: React.FC = () => {
  const [form] = Form.useForm();
  const [apiConfig, setApiConfig] = useState<string | null>(null);

  const handleSaveConfig = (values: any) => {
    // Aqui, você pode fazer o que quiser com a configuração da API
    const config = JSON.stringify(values, null, 2);
    setApiConfig(config);
  };

  return (
    <Row justify="center" align="middle" style={{ minHeight: '100vh' }}>
      <Col span={8}>
        <Card title="Configuração da API" bordered={false}>
          <Form form={form} onFinish={handleSaveConfig} layout="vertical">
            <Form.Item
              name="apiUrl"
              label="URL da API"
              rules={[{ required: true, message: 'Informe a URL da API' }]}
            >
              <Input placeholder="Informe a URL da API" />
            </Form.Item>
            <Form.Item
              name="apiKey"
              label="Chave da API"
              rules={[{ required: true, message: 'Informe a chave da API' }]}
            >
              <Input placeholder="Informe a chave da API" />
            </Form.Item>
            <Form.Item
              name="apiDescription"
              label="Descrição"
            >
              <TextArea rows={4} placeholder="Descrição da API" />
            </Form.Item>
            <Form.Item>
              <Button type="primary" htmlType="submit">
                Salvar
              </Button>
            </Form.Item>
          </Form>
        </Card>
      </Col>
      <Col span={8}>
        {apiConfig && (
          <Card title="Configuração da API Salva">
            <Alert message="A configuração da API foi salva com sucesso." type="success" />
            <pre>{apiConfig}</pre>
          </Card>
        )}
      </Col>
    </Row>
  );
};

export default ApiConfigScreen;
