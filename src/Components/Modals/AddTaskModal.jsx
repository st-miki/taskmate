import React from 'react';
import { Modal, Form, Input, DatePicker, Select, Button } from 'antd';
import { useTranslation } from 'react-i18next';
import './Styles/AddTaskModel.css';

const { Option } = Select;

const AddTaskModal = ({ visible, onCreate, onCancel }) => {
  const { t } = useTranslation();
  const [form] = Form.useForm();

  return (
    <Modal
      visible={visible}
      title={t('addTask')}
      okText={t('create')}
      cancelText={t('cancel')}
      onCancel={onCancel}
      onOk={() => {
        form.validateFields().then(values => {
          form.resetFields();
          onCreate(values);
        }).catch(info => {
          console.log('Validate Failed:', info);
        });
      }}
    >
      <Form
        form={form}
        layout="vertical"
        name="form_in_modal"
      >
        <Form.Item
          name="title"
          label={t('taskTitle')}
          rules={[{ required: true, message: t('pleaseInputTitle') }]}
        >
          <Input style={{ fontFamily: '"Sora", sans-serif' }} />
        </Form.Item>
        <Form.Item
          name="description"
          label={t('taskDescription')}
          rules={[{ required: true, message: t('pleaseInputDescription') }]}
        >
          <Input type="textarea" style={{ fontFamily: '"Sora", sans-serif' }} />
        </Form.Item>
        <Form.Item
          name="deadline"
          label={t('deadline')}
          rules={[{ required: true, message: t('pleaseSelectDeadline') }]}
        >
          <DatePicker style={{ width: '100%', fontFamily: '"Sora", sans-serif' }} />
        </Form.Item>
        <Form.Item
          name="priority"
          label={t('priority')}
          rules={[{ required: true, message: t('pleaseSelectPriority') }]}
        >
          <Select style={{ fontFamily: '"Sora", sans-serif' }}>
            <Option value="low">{t('low')}</Option>
            <Option value="medium">{t('medium')}</Option>
            <Option value="high">{t('high')}</Option>
          </Select>
        </Form.Item>
        <Form.Item
          name="type"
          label={t('taskType')}
          rules={[{ required: true, message: t('pleaseSelectTaskType') }]}
        >
          <Select style={{ fontFamily: '"Sora", sans-serif' }}>
            <Option value="work">{t('work')}</Option>
            <Option value="home">{t('home')}</Option>
          </Select>
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default AddTaskModal;
