// NotificationModal.js
import React from 'react';
import { Typography } from 'antd';

const { Paragraph } = Typography;

const NotificationModal = ({ notification }) => {
  return (
    <div>
      <Paragraph>
        You have been invited to join a group by {notification.sender}.
      </Paragraph>
      {/* Additional content for the modal */}
    </div>
  );
};

export default NotificationModal;
