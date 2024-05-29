import React, { useState } from 'react';
import { Card, Switch, Checkbox } from 'antd';
import { useTranslation } from 'react-i18next'; // Import useTranslation hook for i18n support
import './Styles/NotificationsSettings.css'; // External styling sheet

const NotificationsSettings = () => {
  const { t } = useTranslation(); // Initialize translation function

  const [emailNotification, setEmailNotification] = useState(false);
  const [newsUpdate, setNewsUpdate] = useState(false);
  const [tipsTutorials, setTipsTutorials] = useState(false);
  const [offerPromotion, setOfferPromotion] = useState(false);

  const handleEmailNotificationChange = (checked) => {
    setEmailNotification(checked);
  };

  const handleNewsUpdateChange = (checked) => {
    setNewsUpdate(checked);
  };

  const handleTipsTutorialsChange = (checked) => {
    setTipsTutorials(checked);
  };

  const handleOfferPromotionChange = (checked) => {
    setOfferPromotion(checked);
  };

  return (
    <div className="notifications-settings">
      <Card title={t('emailNotifications')} style={{ width: 800, fontFamily:'"Sora", san-serif' }}>
        <p className="sub-title">{t('substanceNotification')}</p>
        <div className="toggle-container">
          <span>{t('enableEmailNotification')} &nbsp;</span>
          <Switch checked={emailNotification} onChange={handleEmailNotificationChange} />
        </div>
        <div className="checkbox-container">
          <Checkbox checked={newsUpdate} onChange={handleNewsUpdateChange} className='notification-setting-checkbox'>{t('newsUpdate')}</Checkbox>
          <p className="checkbox-description">{t('newsUpdateDescription')}</p>
          <Checkbox checked={tipsTutorials} onChange={handleTipsTutorialsChange} className='notification-setting-checkbox'>{t('tipsTutorials')}</Checkbox>
          <p className="checkbox-description">{t('tipsTutorialsDescription')}</p>
          <Checkbox checked={offerPromotion} onChange={handleOfferPromotionChange} className='notification-setting-checkbox'>{t('offerPromotion')}</Checkbox>
          <p className="checkbox-description">{t('offerPromotionDescription')}</p>
        </div>
      </Card>
    </div>
  );
};

export default NotificationsSettings;
