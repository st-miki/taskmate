import React, { useState } from 'react';
import { Form, Input, Button, Row, Col, Checkbox } from 'antd';
import { useTranslation } from 'react-i18next'; // Import useTranslation
import './Styles/GeneralSettings.css'; // Import custom CSS file for styling

const GeneralSettings = () => {
  const { t } = useTranslation(); // Get translation function

  const [isNameEditable, setIsNameEditable] = useState(false);
  const [isUsernameEditable, setIsUsernameEditable] = useState(false);
  const [isPasswordEditable, setIsPasswordEditable] = useState(false);
  const [isBioEditable, setIsBioEditable] = useState(false);

  const onFinish = (values) => {
    console.log('General settings:', values);
  };

  return (
    <Form
      name="generalSettingsForm"
      onFinish={onFinish}
      initialValues={{
        name: 'John Doe',
        username: 'johndoe',
        password: '********', // Dummy password
        bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      }}
      className="custom-form" // Apply custom CSS class for the form
      labelCol={{ span: 24 }} // Control the width of the labels
      requiredMark={false}
      style={{ fontFamily: 'Sora, sans-serif' }} // Apply Sora font to the form
    >
      <Row gutter={[16, 16]}>
        <Col span={24}>
          <Form.Item
            name="name"
            label={t('fullName')}
            rules={[{ required: true, message: t('inputName') }]}
            style={{ width: '500px', fontFamily: 'Sora, sans-serif', fontSize: '14px' }}
          >
            <Input disabled={!isNameEditable} className="custom-input" />
          </Form.Item>
          <Checkbox style={{ fontFamily: 'Sora, sans-serif', fontSize: '12px' }} onChange={(e) => setIsNameEditable(e.target.checked)}>{t('changeName')}</Checkbox>
        </Col>
        <Col span={24}>
          <Form.Item
            name="username"
            label={t('username')}
            rules={[{ required: true, message: t('inputUsername') }]}
            style={{ width: '500px', fontFamily: 'Sora, sans-serif', fontSize: '14px' }}
          >
            <Input disabled={!isUsernameEditable} className="custom-input" />
          </Form.Item>
          <Checkbox style={{ fontFamily: 'Sora, sans-serif', fontSize: '12px' }} onChange={(e) => setIsUsernameEditable(e.target.checked)}>{t('changeUsername')}</Checkbox>
        </Col>
        <Col span={24}>
          <Form.Item
            name="password"
            label={t('password')}
            rules={[{ required: true, message: t('inputPassword') }]}
            style={{ width: '500px', fontFamily: 'Sora, sans-serif', fontSize: '14px' }}
          >
            <Input.Password disabled={!isPasswordEditable} className="custom-input" />
          </Form.Item>
          <Checkbox style={{ fontFamily: 'Sora, sans-serif', fontSize: '12px' }} onChange={(e) => setIsPasswordEditable(e.target.checked)}>{t('changePassword')}</Checkbox>
        </Col>
        <Col span={24}>
          <Form.Item
            name="bio"
            label={t('bio')}
            style={{ width: '500px', fontFamily: 'Sora, sans-serif', fontSize: '14px' }}
          >
            <Input.TextArea rows={2} disabled={!isBioEditable} className="custom-textarea" />
          </Form.Item>
          <Checkbox style={{ fontFamily: 'Sora, sans-serif', fontSize: '12px', marginBottom:'40px' }} onChange={(e) => setIsBioEditable(e.target.checked)}>{t('changeBio')}</Checkbox>
        </Col>
      </Row>
      <Form.Item>
        <Button type="primary" htmlType="submit">
          {t('saveChanges')}
        </Button>
      </Form.Item>
    </Form>
  );
};

export default GeneralSettings;
