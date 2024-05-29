import React from 'react';
import { Tag, Avatar, Input } from 'antd';
import './Styles/TaskDisplay.css';

const TaskDisplay = ({ tasks }) => {
  return (
    <div className="task-display">
      <div className="display-section">
        {tasks.map(task => (
          <div className="task-card-tasklist" key={task.id}>
            <div className="task-details">
              <div className="priority">
                Priority: <Tag  color='red'>{task.priority}</Tag>
              </div>
              <div className="due-date">Due Date: <strong>{task.dueDate}</strong></div>
              <div className="tags">
                Tags: {task.tags.map(tag => (
                  <Tag key={tag} color="blue" style={{width:'80px'}}>{tag}</Tag>
                ))}
              </div>
              <div className="assignees">
                Assignees: {task.assignees.map(({ name, avatar }) => (
                  <div key={name} className="assignee">
                    <Avatar src={avatar} />
                    <strong>{name}</strong>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="search-section">
        <Input.Search
          placeholder="Search tasks"
          onSearch={value => console.log(value)}
          style={{ width: 300, fontSize:'12px' }}
          className="custom-search"
        />
      </div>
    </div>
  );
};

export default TaskDisplay;
