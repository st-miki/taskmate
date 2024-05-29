import React from 'react';
import { Form, Select, Button, Row, Col, Card, Checkbox } from 'antd';
import './Styles/LanguageSettings.css'; // External styling sheet

const { Option } = Select;

const LanguageSettings = () => {
  const onFinish = (values) => {
    console.log('Received values:', values);
  };

  return (
    <div className="language-settings">
      <Card title="Language & Timezone Settings" style={{ width: 500, fontFamily: '"Sora", sans-serif' }}>
        <Form
          name="languageSettingsForm"
          onFinish={onFinish}
          initialValues={{
            language: 'english',
            autoTimezone: true
          }}
        >
          <Row gutter={[16, 16]}>
            <Col span={24}>
              <div className="label">Language</div>
              <Form.Item
                name="language"
                rules={[{ required: true, message: 'Please select your language!' }]}
              >
                <Select className="language-select">
                  <Option value="english">English</Option>
                  <Option value="amharic">አማርኛ</Option>
                  <Option value="afar">Afar</Option>
                  <Option value="somali">Soomaali</Option>
                  <Option value="tigregna">ትግርኛ</Option>
                  <Option value="oromo">Oromoo</Option>
                </Select>
              </Form.Item>
              <div className="description">Select your preferred language.</div>
            </Col>
          </Row>
          <Row gutter={[16, 16]}>
            <Col span={24}>
              <Form.Item name="autoTimezone" valuePropName="checked">
                <Checkbox>Set timezone automatically</Checkbox>
              </Form.Item>
            </Col>
            <Col span={24}>
              <Form.Item name="timezone">
                <Select disabled={true} className="timezone-select">
                  {/* Options for timezones */}
                </Select>
              </Form.Item>
            </Col>
            <Col span={24}>
              <div className="description">Select your timezone.</div>
            </Col>
          </Row>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              Save Changes
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
};

export default LanguageSettings;
