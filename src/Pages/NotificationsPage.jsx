import React from 'react';
import { Tabs, List, Avatar, Modal, Button, Badge } from 'antd';
import { useTranslation } from 'react-i18next'; // Import useTranslation
import './Styles/NotificationsPage.css'; // Import custom styling
import Sticker from '../assets/Stickers/sticker.webp'; // Import sticker image
import Sticker1 from '../assets/Stickers/sticker1.webp'; // Import sticker image
import Sticker2 from '../assets/Stickers/sticker2.webp'; // Import sticker image
import Sticker3 from '../assets/Stickers/sticker3.webp'; // Import sticker image
import Sticker4 from '../assets/Stickers/sticker4.webp'; // Import sticker image

const { TabPane } = Tabs;

const NotificationsPage = () => {
  const { t } = useTranslation(); // Get translation function

  // Mock data for notifications; this could also come from a backend service
  const notifications = [
    {
      id: 1,
      type: 'invitation',
      message: 'You have been invited to join Project Alpha.',
      sender: 'Asheber Aragaw',
      time: '10:30 AM',
      avatar: Sticker2, // Example avatar URL
    },
    {
      id: 2,
      type: 'task',
      message: 'New task assigned: Design the UI for the dashboard.',
      sender: 'Solomon Alemu',
      time: '9:45 AM',
      avatar: Sticker1, // Example avatar URL
    },
    {
      id: 3,
      type: 'task',
      message: 'New task assigned: Design the UI for the dashboard.',
      sender: 'Gashaw Tadesse',
      time: '9:45 AM',
      avatar: Sticker, // Example avatar URL
    },
    {
      id: 4,
      type: 'invitation',
      message: 'New task assigned: Design the UI for the dashboard.',
      sender: 'Biniam Tesfaye',
      time: '9:45 AM',
      avatar: Sticker3, // Example avatar URL
    },
    {
      id: 5,
      type: 'task',
      message: 'New task assigned: Design the UI for the dashboard.',
      sender: 'Alemitu Shiferaw',
      time: '9:45 AM',
      avatar: Sticker4, // Example avatar URL
    },
    // Add more dummy data if needed
  ];

  const [isVisible, setIsVisible] = React.useState(false);
  const [selectedNotification, setSelectedNotification] = React.useState(null);

  const handleOpenModal = (notification) => {
    setSelectedNotification(notification);
    setIsVisible(true);
  };

  const handleCloseModal = () => {
    setIsVisible(false);
  };

  return (
    <div className="notifications-container">
      <Tabs defaultActiveKey="1">
        <TabPane tab={t('all')} key="1">
          <List
            itemLayout="horizontal"
            dataSource={notifications}
            renderItem={item => (
              <List.Item onClick={() => item.type === 'invitation' && handleOpenModal(item)}>
                <List.Item.Meta
                  avatar={<Avatar src={item.avatar} style={{ borderRadius: '8px' }} />}
                  title={item.sender}
                  description={
                    <div style={{ fontSize: '12px', fontFamily: 'Sora, sans-serif' }}>
                      <span>{item.time} </span>
                      <Badge status="processing" />
                      {item.type === 'invitation' ? (
                        <>
                          <span style={{ fontWeight: 500 }}>  &nbsp; {item.sender}</span>   {t('invitedYouToJoin')}
                        </>
                      ) : (
                        <>
                          <span style={{ fontWeight: 500 }}> &nbsp;  {item.sender}</span>   {t('hasAttachedTask')}
                        </>
                      )}
                    </div>
                  }
                />
                {item.type === 'invitation' && (
                  <div className="notification-buttons">
                    <Button type="primary" onClick={() => handleOpenModal(item)} style={{ marginRight: '10px', fontSize: '12px', fontFamily: '"sora", san-serif' }}>{t('accept')}</Button>
                    <Button onClick={handleCloseModal} style={{ fontSize: '12px', fontFamily: '"sora", san-serif' }}>{t('decline')}</Button>
                  </div>
                )}
              </List.Item>
            )}
          />
        </TabPane>
        <TabPane tab={t('unread')} key="2">
          {/* Unread notifications */}
        </TabPane>
        <TabPane tab={t('archive')} key="3">
          {/* Archived notifications */}
        </TabPane>
      </Tabs>
      {selectedNotification && (
        <Modal
          title={selectedNotification.type === 'invitation' ? t('invitation') : t('taskAssigned')}
          visible={isVisible}
          onCancel={handleCloseModal}
          footer={[
            <Button key="decline" onClick={handleCloseModal}>
              {t('decline')}
            </Button>,
            <Button key="accept" type="primary" onClick={handleCloseModal}>
              {t('accept')}
            </Button>,
          ]}
        >
          <p>{selectedNotification.message}</p>
          <p>{t('sender')}: {selectedNotification.sender}</p>
        </Modal>
      )}
    </div>
  );
};

export default NotificationsPage;
