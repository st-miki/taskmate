import React from 'react';
import { Spin, Typography } from 'antd';

const LoadingPage = () => {

    const{Title}= Typography;
  return (
    <div style={{ display: 'flex', flexDirection:'column', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <Title level={1}>Task<span style={{color:'blue'}}>Mate </span></Title> 
      <Spin size="large" />
    </div>
  );
};

export default LoadingPage;