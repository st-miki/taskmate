// src/components/TaskSummary.js
import React, { useState } from 'react';
import { Button, Card, Tooltip } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import { useTranslation } from 'react-i18next';
import AddTaskModal from '../Modals/AddTaskModal';
import './Styles/TaskSummary.css';
import bgOne from '../../assets/BackgroundImages/bgOne.png';
import bgTwo from '../../assets/BackgroundImages/bgTwo.png';
import bgThree from '../../assets/BackgroundImages/bgThree.png';

const TaskSummary = () => {
  const { t } = useTranslation();
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const handleCreate = (values) => {
    console.log('Received values of form: ', values);
    setIsModalVisible(false);
  };

  return (
    <div className="task-summary-container">
      <div className="header-section">
        <div className="title-and-description">
          <Tooltip title={t('tasksSummaryTooltip')}>
            <span style={{ fontFamily: '"Sora", sans-serif', fontWeight: '600' }}>{t('tasksSummary')}</span>
          </Tooltip>
          <Tooltip title={t('addTaskDescriptionTooltip')}>
            <div className='task-summary-description'>{t('addTaskDescription')}</div>
          </Tooltip>
        </div>
        <Tooltip title={t('addTaskButtonTooltip')}>
          <Button 
            type="primary" 
            icon={<PlusOutlined />} 
            style={{ fontFamily: '"Sora", sans-serif', fontSize: '12px', height: '40px', padding: '0 20px' }} 
            onClick={showModal}
          >
            {t('addTask')}
          </Button>
        </Tooltip>
      </div>
      <div className="cards-container">
        <Tooltip title={t('upcomingTasksTooltip')}>
          <Card className="task-card" style={{ backgroundImage: `url(${bgOne})` }}>
            <h1>82</h1>
            <span style={{ fontFamily: '"Sora", sans-serif', fontWeight: '600' }}>{t('upcomingTasks')}</span>
          </Card>
        </Tooltip>
        <Tooltip title={t('tasksInProgressTooltip')}>
          <Card className="task-card" style={{ backgroundImage: `url(${bgTwo})` }}>
            <h1>12</h1>
            <span style={{ fontFamily: '"Sora", sans-serif', fontWeight: '600' }}>{t('tasksInProgress')}</span>
          </Card>
        </Tooltip>
        <Tooltip title={t('tasksCompletedTooltip')}>
          <Card className="task-card" style={{ backgroundImage: `url(${bgThree})` }}>
            <h1>127</h1>
            <span style={{ fontFamily: '"Sora", sans-serif', fontWeight: '600' }}>{t('tasksCompleted')}</span>
          </Card>
        </Tooltip>
      </div>
      <AddTaskModal
        visible={isModalVisible}
        onCreate={handleCreate}
        onCancel={handleCancel}
      />
    </div>
  );
}

export default TaskSummary;
