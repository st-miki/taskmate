// src/components/OrganizationPage.js
import React from 'react';
import { Tabs } from 'antd';
import { CheckSquareOutlined, TeamOutlined, MessageOutlined } from '@ant-design/icons';
import TaskGraph from '../Components/Organization/TaskGraph';
import TaskList from '../Components/Organization/TaskList';
import CoworkersList from '../Components/Organization/CoworkersList';
import ChatSection from '../Components/Organization/ChatSection';
import './Styles/OrganizationPage.css';

const { TabPane } = Tabs;

const OrganizationPage = () => {
  return (
    <div className="organization-page">
      <h1>Organization Page</h1>
      <Tabs defaultActiveKey="1">
        <TabPane tab={<span><CheckSquareOutlined />Tasks</span>} key="1">
          <TaskGraph />
          <TaskList />
        </TabPane>
        <TabPane tab={<span><TeamOutlined />Coworkers</span>} key="2">
          <CoworkersList />
        </TabPane>
        <TabPane tab={<span><MessageOutlined />Chat</span>} key="3">
          <ChatSection />
        </TabPane>
      </Tabs>
    </div>
  );
};

export default OrganizationPage;
