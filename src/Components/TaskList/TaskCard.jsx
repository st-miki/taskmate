import React from 'react';
import { Card, Avatar, Tooltip, Row, Col } from 'antd';
import { PlusOutlined, EllipsisOutlined, ArrowRightOutlined } from '@ant-design/icons';
import Sticker from '../../assets/Stickers/sticker3.webp';
import Sticker1 from '../../assets/Stickers/sticker2.webp';
import Sticker2 from '../../assets/Stickers/sticker5.webp';
import Sticker3 from '../../assets/Stickers/sticker1.webp';
import Sticker4 from '../../assets/Stickers/sticker4.webp';


const TaskCard = () => {
  const columns = [
    {
      title: 'To Do',
      key: 'todo',
      dataIndex: 'todo',
    },
    {
      title: 'In Progress',
      key: 'inProgress',
      dataIndex: 'inProgress',
    },
    {
      title: 'Completed',
      key: 'completed',
      dataIndex: 'completed',
    },
    {
      title: 'Overdue',
      key: 'overdue',
      dataIndex: 'overdue',
    },
  ];

  const data = [
    {
      key: '1',
      todo: [
        {
          date: 'Today',
          title: 'Design the user interface',
          timeframe: '9 AM - 5 PM',
          avatars: [Sticker, Sticker3],
          color: '#ffcccc',
        },
        {
          date: 'Tomorrow',
          title: 'Create task flow diagrams',
          timeframe: '10 AM - 4 PM',
          avatars: [Sticker4],
          color: '#ccffff',
        },
        {
          date: 'Today',
          title: 'Prepare user stories for development',
          timeframe: '1 PM - 3 PM',
          avatars: [Sticker2, Sticker1],
          color: '#ffcc99',
        },
      ],
      inProgress: [
        {
          date: 'Yesterday',
          title: 'Implement authentication system',
          timeframe: '10 AM - 4 PM',
          avatars: [Sticker2, Sticker3],
          color: '#ccffcc',
        },
        {
          date: 'Today',
          title: 'Develop the API endpoints',
          timeframe: '12 PM - 8 PM',
          avatars: [Sticker4],
          color: '#99ccff',
        },
        {
          date: 'Today',
          title: 'Integrate with third-party services',
          timeframe: '2 PM - 6 PM',
          avatars: [Sticker],
          color: '#ffccff',
        },
      ],
      completed: [
        {
          date: 'Yesterday',
          title: 'Finalize project requirements',
          timeframe: '9 AM - 11 AM',
          avatars: [Sticker2, Sticker3],
          color: '#d9d9d9',
        },
        {
          date: 'Yesterday',
          title: 'Setup project repository',
          timeframe: '1 PM - 2 PM',
          avatars: [Sticker4],
          color: '#ccccff',
        },
        {
          date: 'Yesterday',
          title: 'Complete initial project setup',
          timeframe: '3 PM - 5 PM',
          avatars: [Sticker3, Sticker1, Sticker2],
          color: '#b3ffb3',
        },
      ],
      overdue: [
        {
          date: 'Last Week',
          title: 'Review team performance',
          timeframe: '10 AM - 11 AM',
          avatars: [Sticker4, Sticker1, Sticker2],
          color: '#ff6666',
        },
        {
          date: 'Last Week',
          title: 'Audit the project documentation',
          timeframe: '2 PM - 4 PM',
          avatars: [Sticker3, Sticker2, Sticker1, Sticker4],
          color: '#ff9966',
        },
        {
          date: 'Last Week',
          title: 'Plan the next sprint tasks',
          timeframe: '4 PM - 6 PM',
          avatars: [Sticker4, Sticker3],
          color: '#ff9999',
        },
      ],
    },
  ];

  const renderTasks = (tasks) => {
    return tasks.map((task, index) => (
      <Tooltip key={index} title={task.title}>
        <Card
          style={{
            width: 210,
            margin: '10px 0',
            backgroundColor: task.color,
          }}
          bodyStyle={{ padding: 10 }}
        >
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 10 }}>
            <Tooltip title={`Task Date: ${task.date}`}>
              <span style={{ fontFamily: '"Sora", sans-serif', fontSize: '12px' }}>{task.date}</span>
            </Tooltip>
            <ArrowRightOutlined style={{ backgroundColor: 'lightgrey', borderRadius: '50%', padding: 5 }} />
          </div>
          <Tooltip title={task.title}>
            <h4 style={{ fontFamily: '"Sora", sans-serif', fontSize: '12px', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{task.title}</h4>
          </Tooltip>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 10 }}>
            <Tooltip title={`Timeframe: ${task.timeframe}`}>
              <span style={{ fontFamily: '"Sora", sans-serif', fontSize: '12px' }}>{task.timeframe}</span>
            </Tooltip>
            <div>
              {task.avatars.map((avatar, idx) => (
                <Avatar key={idx} src={avatar} style={{ marginLeft: -10 }} />
              ))}
            </div>
          </div>
        </Card>
      </Tooltip>
    ));
  };

  return (
    <div style={{ padding: '20px' }}>
      <Row gutter={16}>
        {columns.map((column) => (
          <Col key={column.key} span={6}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <Tooltip title={column.title}>
                <span style={{ fontFamily: '"Sora", sans-serif', fontSize: '12px' }}>{column.title}</span>
              </Tooltip>
              <div style={{ display: 'flex', alignItems: 'center', marginRight: '40px' }}>
                <Tooltip title="More options">
                  <EllipsisOutlined style={{ fontSize: '12px', marginRight: '8px', cursor: 'pointer' }} />
                </Tooltip>
                <Tooltip title="Add Task">
                  <PlusOutlined style={{ color: 'blue', fontSize: '12px', cursor: 'pointer' }} />
                </Tooltip>
              </div>
            </div>
            {data[0][column.dataIndex] && renderTasks(data[0][column.dataIndex])}
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default TaskCard;
