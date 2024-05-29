import React from 'react';
import { List, Typography } from 'antd';


const data = [
  'Task 1 - Due: 2024-05-20',
  'Task 2 - Due: 2024-05-22',
  'Task 3 - Due: 2024-05-25',
];

const TaskList = () => (
  <List
    header={<div style={{fontFamily:'"Sora", san-serif', fontSize:'14px'}}>Task List</div>}
    bordered
    style={{fontFamily:'"Sora", san-serif', fontSize:'12px'}}
    dataSource={data}
    renderItem={item => (
      <List.Item>
        <Typography.Text mark>[Task]</Typography.Text> {item}
      </List.Item>
    )}
  />
);

export default TaskList;
