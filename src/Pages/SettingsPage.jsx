import React, { useState } from 'react';
import { Tabs } from 'antd';
import GeneralSettings from '../Components/Settings/GeneralSettings';
import PermissionsSettings from '../Components/Settings/UserPermissionsSetting';
import PlansSettings from '../Components/Settings/PlansSetting';
import NotificationsSettings from '../Components/Settings/NotificationsSettings';
import ThemeSettings from '../Components/Settings/ThemePreferencesSetting';
import LanguageSettings from '../Components/Settings/LanguageSettings';
import { useTranslation } from 'react-i18next'; // Import useTranslation
import './Styles/SettingsPage.css'; // External stylesheet for custom styling

const { TabPane } = Tabs;

const SettingsPage = () => {
  const { t } = useTranslation(); // Get translation function

  const [activeTab, setActiveTab] = useState('general');

  const handleTabChange = (key) => {
    setActiveTab(key);
  };

  return (
    <div className="settings-container">
      <Tabs activeKey={activeTab} onChange={handleTabChange} tabPosition="left">
        <TabPane tab={t('generalDetails')} key="general">
          <GeneralSettings />
        </TabPane>
        <TabPane tab={t('userPermissions')} key="permissions">
          <PermissionsSettings />
        </TabPane>
        <TabPane tab={t('plans')} key="plans">
          <PlansSettings />
        </TabPane>
        <TabPane tab={t('notifications')} key="notifications">
          <NotificationsSettings />
        </TabPane>
        <TabPane tab={t('themePreferences')} key="theme">
          <ThemeSettings />
        </TabPane>
        <TabPane tab={t('language')} key="language">
          <LanguageSettings />
        </TabPane>
      </Tabs>
    </div>
  );
};

export default SettingsPage;
