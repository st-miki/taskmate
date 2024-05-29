import React from 'react';
import TaskSummary from '../Components/Overview/TaskSummary';
import OrganizationsJoined from '../Components/Overview/OrganizationsJoined';
import Timeline from '../Components/Overview/Timeline';
import RecentTasks from '../Components/Overview/RecentTasks';
import './Styles/OverviewPage.css';


const OverviewPage = () => {
  return (
    <div className="overview-page" style={{overflowY:'auto'}}>
      <div className='overview-summary'>
        <TaskSummary />
        <OrganizationsJoined />
      </div>
      <div className="flex-container">
        <Timeline />
        <RecentTasks />
      </div>
    </div>
  );
}

export default OverviewPage;
