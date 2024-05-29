import React, { useState } from 'react';
import TaskDisplay from '../Components/TaskList/TaskDisplay';
import TaskCard from '../Components/TaskList/TaskCard';
import './Styles/TaskListPage.css';
import Sticker from '../assets/Stickers/sticker4.webp';
import Sticker1 from '../assets/Stickers/sticker5.webp';

const TaskListPage = () => {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      priority: "High",
      dueDate: "2024-05-15",
      tags: ['UI/UX', 'Front-End'],
      assignees: [
        { name: 'Shimeles Ayalew', avatar: Sticker },
        { name: 'Bekele Jemberu', avatar: Sticker1 }
      ]
    },
    // More task objects can be added here
  ]);

  return (
    <div className="tasklist-page">
      <div className="display-section">
        {/* Display section content */}
        <TaskDisplay tasks={tasks} />
        <TaskCard />
      </div>
    </div>
  );
};

export default TaskListPage
