import React from 'react';
import { Avatar, Tag, Tooltip } from 'antd';
import { Link } from 'react-router-dom';
import { UserOutlined, TeamOutlined, SafetyOutlined, CalendarOutlined } from '@ant-design/icons';

import Google from '../../assets/Logo/google.png';
import Amazon from '../../assets/Logo/amazon.png';
import EBS from '../../assets/Logo/ebs.png';
import GPT from '../../assets/Logo/gpt.png';
import Facebook from '../../assets/Logo/facebook.jpg';
import Microsoft from '../../assets/Logo/microsoft.webp';
import { useTranslation } from 'react-i18next'; // Import useTranslation
import './Styles/OrganizationsJoined.css';

const OrganizationsJoined = () => {
  const { t } = useTranslation(); // Get translation function

  return (
    <div className="organizations-joined">
      <div className='organizations-joined-title-link'>
        <Tooltip title="Organizations you have joined">
          <span style={{fontFamily:'"Sora", san-serif', fontWeight:'600'}}>{t('organizationsJoined')}</span>
        </Tooltip>
        <Tooltip title="See all organizations">
          <Link to="/organizations" style={{fontFamily:'"Sora", san-serif', fontWeight:'600', fontSize:'14px', textDecoration:'none'}}>{t('seeAll')}</Link>
        </Tooltip>
      </div>
      {/* Profile pictures of organizations joined */}
      <div className="organizations-profile-pictures">
        <Tooltip title="Google">
          <Avatar size={25} src={Google} className='organization-avatar' />
        </Tooltip>
        <Tooltip title="Facebook">
          <Avatar size={25} src={Facebook} className='organization-avatar' />
        </Tooltip>
        <Tooltip title="Microsoft">
          <Avatar size={25} src={Microsoft} className='organization-avatar' />
        </Tooltip>
        <Tooltip title="Amazon">
          <Avatar size={25} src={Amazon} className='organization-avatar' />
        </Tooltip>
        <Tooltip title="EBS">
          <Avatar size={25} src={EBS} className='organization-avatar' />
        </Tooltip>
        <Tooltip title="GPT">
          <Avatar size={25} src={GPT} className='organization-avatar' />
        </Tooltip>
        {/* Add more Avatars for additional organizations */}
      </div>
      {/* Task types */}
      <div className="task-types">
        <Tooltip title="Different types of tasks">
          <span style={{fontFamily:'"Sora", san-serif', fontWeight:'600'}}>{t('taskTypes')}</span>
        </Tooltip>
        <div className="tags">
          <Tooltip title="Design tasks">
            <Tag color="blue" className='tag' icon={<UserOutlined />}>{t('design')}</Tag>
          </Tooltip>
          <Tooltip title="Development team tasks">
            <Tag color="green" className='tag' icon={<TeamOutlined />}>{t('developmentTeam')}</Tag>
          </Tooltip>
          <Tooltip title="Data at risk tasks">
            <Tag color="orange" className='tag' icon={<SafetyOutlined />}>{t('dataAtRisk')}</Tag>
          </Tooltip>
          <Tooltip title="Meeting tasks">
            <Tag color="purple" className='tag' icon={<CalendarOutlined />}>{t('meeting')}</Tag>
          </Tooltip>
          {/* Add more tags for additional task types */}
        </div>
      </div>
    </div>
  );
}

export default OrganizationsJoined;
