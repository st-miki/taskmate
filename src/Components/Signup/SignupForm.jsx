import React, { useState } from 'react';
import { Form, Input, Button, Checkbox, Typography, Divider, Steps } from 'antd';
import { GoogleOutlined } from '@ant-design/icons';

const { Title, Text } = Typography;
const { Step } = Steps;

const SignUpForm = () => {
  const [currentStep, setCurrentStep] = useState(0);

  const nextStep = () => {
    setCurrentStep(currentStep + 1);
  };

  const prevStep = () => {
    setCurrentStep(currentStep - 1);
  };

  const onFinish = (values) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <div className="signup-form">
      <Title level={2} className="signup-logo">TaskMate</Title>
      <div className="step-indicator">
        <Steps current={currentStep} onChange={setCurrentStep} direction="horizontal" size="small" labelPlacement="vertical">
          <Step title="Personal Information" />
          <Step title="Contact Information" />
          <Step title="Username & Password" />
        </Steps>
      </div>
      <Form
        name="signup"
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
        requiredMark={false}
        style={{ width: '300px', marginLeft:'200px' }}
      >
        {currentStep === 0 && (
          <>
            <Form.Item
              label={<Text style={{ fontFamily: '"Sora", sans-serif', fontSize: '14px', fontWeight: '500' }}>First Name</Text>}
              name="firstName"
              rules={[{ required: true, message: 'Please input your first name.' }]}
              labelCol={{ span: 24 }}
              wrapperCol={{ span: 24 }}
              style={{ marginBottom: '12px' }}
            >
              <Input size="large" />
            </Form.Item>

            <Form.Item
              label={<Text style={{ fontFamily: '"Sora", sans-serif', fontSize: '14px', fontWeight: '500' }}>Last Name</Text>}
              name="lastName"
              rules={[{ required: true, message: 'Please input your last name.' }]}
              labelCol={{ span: 24 }}
              wrapperCol={{ span: 24 }}
              style={{ marginBottom: '12px' }}
            >
              <Input size="large" />
            </Form.Item>

            <Form.Item
              label={<Text style={{ fontFamily: '"Sora", sans-serif', fontSize: '14px', fontWeight: '500' }}>Age</Text>}
              name="age"
              rules={[{ required: true, type: 'number', min: 18, message: 'You must be at least 18 years old.' }]}
              labelCol={{ span: 24 }}
              wrapperCol={{ span: 24 }}
              style={{ marginBottom: '12px' }}
            >
              <Input type="number" size="large" />
            </Form.Item>
          </>
        )}

        {currentStep === 1 && (
          <>
            <Form.Item
              label={<Text style={{ fontFamily: '"Sora", sans-serif', fontSize: '14px', fontWeight: '500' }}>Email</Text>}
              name="email"
              rules={[{ required: true, type: 'email', message: 'Please input a valid email.' }]}
              labelCol={{ span: 24 }}
              wrapperCol={{ span: 24 }}
              style={{ marginBottom: '12px' }}
            >
              <Input size="large" />
            </Form.Item>

            <Form.Item
              label={<Text style={{ fontFamily: '"Sora", sans-serif', fontSize: '14px', fontWeight: '500' }}>Phone Number</Text>}
              name="phoneNumber"
              rules={[{ required: true, message: 'Please input your phone number.' }]}
              labelCol={{ span: 24 }}
              wrapperCol={{ span: 24 }}
              style={{ marginBottom: '12px' }}
            >
              <Input size="large" />
            </Form.Item>
          </>
        )}

        {currentStep === 2 && (
          <>
            <Form.Item
              label={<Text style={{ fontFamily: '"Sora", sans-serif', fontSize: '14px', fontWeight: '500' }}>Username</Text>}
              name="username"
              rules={[{ required: true, message: 'Please input your username.' }]}
              labelCol={{ span: 24 }}
              wrapperCol={{ span: 24 }}
              style={{ marginBottom: '12px' }}
            >
              <Input size="large" />
            </Form.Item>

            <Form.Item
              label={<Text style={{ fontFamily: '"Sora", sans-serif', fontSize: '14px', fontWeight: '500' }}>Password</Text>}
              name="password"
              rules={[{ required: true, message: 'Please input your password.' }]}
              labelCol={{ span: 24 }}
              wrapperCol={{ span: 24 }}
              style={{ marginBottom: '12px' }}
            >
              <Input.Password size="large" />
            </Form.Item>

            <Form.Item
              label={<Text style={{ fontFamily: '"Sora", sans-serif', fontSize: '14px', fontWeight: '500' }}>Confirm Password</Text>}
              name="confirmPassword"
              dependencies={['password']}
              rules={[
                { required: true, message: 'Please confirm your password.' },
                ({ getFieldValue }) => ({
                  validator(_, value) {
                    if (!value || getFieldValue('password') === value) {
                      return Promise.resolve();
                    }
                    return Promise.reject(new Error('The two passwords do not match.'));
                  },
                }),
              ]}
              labelCol={{ span: 24 }}
              wrapperCol={{ span: 24 }}
              style={{ marginBottom: '12px' }}
            >
              <Input.Password size="large" />
            </Form.Item>
          </>
        )}

<Form.Item name="remember" valuePropName="checked">
          <Checkbox><span style={{ fontFamily: '"Sora", san-serif', fontSize: '14px', fontWeight: '500' }}>I agree to the Terms and Conditions</span></Checkbox>
        </Form.Item>

        <Form.Item>
          {currentStep > 0 && (
            <Button style={{ marginRight: 8 }} onClick={prevStep}>
              Previous
            </Button>
          )}
          {currentStep < 2 && (
            <Button type="primary" onClick={nextStep}>
              Next
            </Button>
          )}
          {currentStep === 2 && (
            <Button type="primary" htmlType="submit">
              Sign Up
            </Button>
          )}
        </Form.Item>
      </Form>
      <Divider orientation="center"><Text style={{ fontFamily: '"Sora", sans-serif', fontSize: '11px', fontWeight: '400', color: '#000000' }}>OR</Text></Divider>
      <div style={{ textAlign: 'center', fontSize: '14px', marginLeft:'100px' }}>
        Already have an account? <a href="#" style={{ textDecoration: 'none', color: '#2B4FEB' }}>Sign In</a>
      </div>
      <Button type="primary" icon={<GoogleOutlined />} style={{ width: '60%', marginTop: '20px', marginLeft:'180px' }} size='large'>
        <span style={{ fontFamily: '"Sora", san-serif', fontSize: '14px' }}>Sign In with Google</span>
      </Button>
    </div>
  );
};

export default SignUpForm;