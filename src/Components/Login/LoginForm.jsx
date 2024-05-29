import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Form, Input, Button, Checkbox, Typography, Divider, message } from 'antd';
import { setUsername } from '../../redux/slices/userSlice';
import { GoogleOutlined } from '@ant-design/icons';

const { Title, Text } = Typography;

const LoginForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [loginError, setLoginError] = useState('');

  const onFinish = (values) => {
    const { username, password } = values;

    if ((username === 'employee' && password === '1234') || (username === 'organization' && password === '1234')) {
      dispatch(setUsername(username));
      console.log('Username dispatched:', username); // Log the dispatched username
      navigate('/');
    } else {
      setLoginError('Invalid credentials');
      message.error('Invalid username or password');
    }
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <div className="login-form">
      <Title level={2} className="login-logo">Task<span style={{color:'blue'}}>Mate</span></Title>
      <Form
        name="basic"
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
        requiredMark={false}
        style={{ width: '300px' }}
      >
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

        <Form.Item name="remember" valuePropName="checked">
          <Checkbox>
            <span style={{ fontFamily: '"Sora", sans-serif', fontSize: '14px', fontWeight: '500' }}>Remember me</span>
          </Checkbox>
          <br />
          <Text style={{ fontFamily: '"Sora", sans-serif', fontSize: '11px', fontWeight: '500', color: '#00000090', marginLeft: '20px' }}>Save my login details for next time</Text>
        </Form.Item>

        {loginError && <Text type="danger">{loginError}</Text>}

        <Form.Item>
          <Button type="primary" htmlType="submit" block size='large'>
            <span style={{ fontFamily: '"Sora", sans-serif', fontSize: '14px' }}>Sign In</span>
          </Button>
        </Form.Item>
      </Form>
      <Divider orientation="center">
        <Text style={{ fontFamily: '"Sora", sans-serif', fontSize: '11px', fontWeight: '400', color: '#000000' }}>OR</Text>
      </Divider>
      <div style={{ textAlign: 'center', fontSize: '14px' }}>
        Don't have an account? <a onClick={() => navigate('/signup')} style={{ textDecoration: 'none', color: '#2B4FEB' }}>Sign Up</a>
      </div>
      <Button type="primary" icon={<GoogleOutlined />} style={{ width: '100%', marginTop: '20px' }} size='large'>
        <span style={{ fontFamily: '"Sora", sans-serif', fontSize: '14px' }}>Sign in with Google</span>
      </Button>
    </div>
  );
};

export default LoginForm;
