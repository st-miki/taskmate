import React, { useState } from 'react';
import { Button, Calendar, Card, Avatar, Tooltip } from 'antd';
import { DownOutlined, UserOutlined } from '@ant-design/icons';
import { useTranslation } from 'react-i18next'; // Import useTranslation
import Sticker from '../../assets/Stickers/sticker.webp';
import Sticker1 from '../../assets/Stickers/sticker1.webp';
import Sticker2 from '../../assets/Stickers/sticker2.webp';
import './Styles/Timeine.css';

const Timeline = () => {
  const [visible, setVisible] = useState(false);
  const { t } = useTranslation(); // Get translation function

  const handleVisibleChange = () => {
    setVisible(!visible);
  };

  const recentTasks = [
    { id: 1, assigner: Sticker, title: t('task1Title'), time: t('task1Time') },
    { id: 2, assigner: Sticker1, title: t('task2Title'), time: t('task2Time') },
    { id: 3, assigner: Sticker2, title: t('task3Title'), time: t('task3Time') },
  ];

  return (
    <div className="timeline">
      <div className="timeline-header">
        <Tooltip title="Timeline of the year">
          <span style={{fontFamily:'"Sora", san-serif', fontWeight:'600'}}>{t('timelineOfYear')}</span>
        </Tooltip>
        <Tooltip title="June to September">
          <Button onClick={handleVisibleChange}>
            {t('juneToSeptember')} <DownOutlined />
          </Button>
        </Tooltip>
      </div>
      {visible && (
        <Tooltip title="Mini calendar">
          <Calendar fullscreen={false} className="mini-calendar" />
        </Tooltip>
      )}
      <div className="weekdays">
        <Tooltip title="Sunday">
          <div className='days'>07 <span className='weekday'>{t('sun')}</span> </div>
        </Tooltip>
        <Tooltip title="Monday">
          <div className='days'>08 <span className='weekday'>{t('mon')}</span> </div>
        </Tooltip>
        <Tooltip title="Tuesday">
          <div className='days'>09 <span className='weekday'>{t('tue')}</span> </div>
        </Tooltip>
        <Tooltip title="Wednesday">
          <div className='days'>10 <span className='weekday'>{t('wed')}</span> </div>
        </Tooltip>
        <Tooltip title="Thursday">
          <div className='days'>11 <span className='weekday'>{t('thu')}</span> </div>
        </Tooltip>
        <Tooltip title="Friday">
          <div className='days'>12 <span className='weekday'>{t('fri')}</span></div>
        </Tooltip>
        <Tooltip title="Saturday">
          <div className='days'>13 <span className='weekday'>{t('sat')}</span> </div>
        </Tooltip>
      </div>
      <div className="recent-tasks">
        {recentTasks.map(task => (
          <Tooltip key={task.id} title="Recent task">
            <Card className="task-card-timeline">
              <Card.Meta
                avatar={<Avatar src={task.assigner || UserOutlined} />}
                title={task.title}
                description={`${task.time} ${t('leftTillDeadline')}`}
              />
            </Card>
          </Tooltip>
        ))}
      </div>
    </div>
  );
};

export default Timeline;
