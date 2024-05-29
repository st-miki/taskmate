import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Layout, Menu, Avatar, Select, Button } from 'antd'; 
import { useSelector, useDispatch } from 'react-redux'; 
import {
  MenuOutlined,
  AppstoreOutlined,
  BellOutlined,
  SettingOutlined,
  GlobalOutlined,
  TeamOutlined,
  BuildOutlined,
  QuestionCircleOutlined,
  LogoutOutlined
} from '@ant-design/icons';
import Profile_image from '../../assets/Images/Profile_Image.jpg';
import { setSidebarItem } from '../../features/sidebar/sidebarSlice';
import { useTranslation } from 'react-i18next'; 
import HelpTourModal from '../../Components/Help/HelpTourModal'; // Import the HelpTourModal component
import './Sidebar.css'; 

const { Sider } = Layout;
const { Option } = Select;

const Sidebar = () => {
  const dispatch = useDispatch();
  const { t, i18n } = useTranslation(); 
  const username = useSelector((state) => state.user?.username || '');
  const navigate = useNavigate();
  const [visible, setVisible] = useState(false);
  const [step, setStep] = useState(0);

  
  const handleLogout = () => {
    navigate('/login');
  };
  const handleMenuItemClick = (item) => {
    dispatch(setSidebarItem(item));
  };

  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };

  const startTour = () => {
    setVisible(true);
  };

  const handleNextStep = () => {
    setStep(prevStep => (prevStep + 1) % 4); // Loop back to the first step
  };

  const handleCancel = () => {
    setVisible(false);
    setStep(0);
  };

  return (
    <Sider width={250} style={{ height: '100vh', overflowY: 'auto' }}>
      <div className="logo">
        <span className="taskmate">Task<span className="orange">Mate</span></span>
        <span className="motto">Process, Prioritize, Execute</span>
      </div>
      <div className="account-info">
        <div className="profile">
          <Avatar size={48} src={Profile_image} />
        </div>
        <div className="details">
          <p className="name">Kebede Ewqetu</p>
          <p className="username">@Kenewqet</p>
        </div>
      </div>
      <div className="menu-container">
        <Menu theme="light" mode="inline" defaultOpenKeys={['menu']}>
          <Menu.SubMenu key='menu' title='Menu' icon={<MenuOutlined />}>
            <Menu.Item key="overview" icon={<AppstoreOutlined />} onClick={() => handleMenuItemClick("Overview")}>
              <Link to="/">{t('overview')}</Link>
            </Menu.Item>
            <Menu.Item key="tasklist" icon={<MenuOutlined />} onClick={() => handleMenuItemClick("TasksList")}>
              <Link to="/tasklist">{t('tasklist')}</Link>
            </Menu.Item>
            <Menu.Item key="notifications" icon={<BellOutlined />} onClick={() => handleMenuItemClick("Notifications")}>
              <Link to="/notifications">{t('notifications')}</Link>
            </Menu.Item>
            <Menu.Item key="settings" icon={<SettingOutlined />} onClick={() => handleMenuItemClick("Settings")}>
              <Link to="/settings">{t('settings')}</Link>
            </Menu.Item>
            <Menu.Item key="language" icon={<GlobalOutlined />} onClick={() => {}}>
              <Select defaultValue={i18n.language} onChange={changeLanguage}>
                <Option value="en">English</Option>
                <Option value="am">Amharic</Option>
                <Option value="om">Oromo</Option>
                <Option value="ti">Tigrigna</Option>
                <Option value="so">Somali</Option>
              </Select>
            </Menu.Item>
            <Menu.Item key="help" icon={<QuestionCircleOutlined />} onClick={startTour}>
              {t('help')}
            </Menu.Item>
          </Menu.SubMenu>
          <Menu.SubMenu key="groups" title="Groups" icon={<TeamOutlined />} >
            <Menu.Item key="org1" icon={<BuildOutlined />} onClick={() => handleMenuItemClick("Organization1")}>
              <Link to="/organization/org1">{t('org1')}</Link>
            </Menu.Item>
            <Menu.Item key="org2" icon={<BuildOutlined />} onClick={() => handleMenuItemClick("Organization2")}>
              <Link to="/organization/org2">{t('org2')}</Link>
            </Menu.Item>
          </Menu.SubMenu>
        </Menu>
      </div>
      <div className="logout-version" >
        <span onClick={handleLogout} style={{color:'red', display:'flex', flexDirection:'row'}}><LogoutOutlined /> &nbsp; &nbsp; Logout</span>
        <p className="version">Version 1.0.0</p>
      </div>
      <HelpTourModal 
        visible={visible}
        step={step}
        onNext={handleNextStep}
        onCancel={handleCancel}
      />
    </Sider>
  );
};

export default Sidebar;
