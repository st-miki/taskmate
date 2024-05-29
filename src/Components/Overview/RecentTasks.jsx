import React from 'react';
import { useTranslation } from 'react-i18next'; // Import useTranslation
import './Styles/RecentTasks.css';

const RecentTasks = () => {
  const { t } = useTranslation(); // Get translation function

  return (
    <div className="recent-tasks">
      <h2>{t('recentTasks')}</h2>
      {/* Recent tasks cards */}
    </div>
  );
}

export default RecentTasks;
