import React, { useState } from 'react';
import { Breadcrumb, Select } from 'antd';
import './Header.css'; 
import { CalendarOutlined } from '@ant-design/icons';
import { useSelector } from 'react-redux';
import { selectSelectedItem } from '../../features/sidebar/sidebarSlice';
import { useTranslation } from 'react-i18next';
import { toEthiopian, toGregorian } from 'ethiopian-date';

const { Option } = Select;

const Header = () => {
  const selectedItem = useSelector(selectSelectedItem);
  const { t } = useTranslation();
  const [calendar, setCalendar] = useState('gregorian'); // State for calendar selection

  const currentDate = new Date();
  const formattedDate = calendar === 'gregorian'
    ? `${currentDate.toLocaleString('default', { month: 'long' })} ${currentDate.getDate()}, ${currentDate.getFullYear()}`
    : (() => {
        const [year, month, day] = toEthiopian(currentDate.getFullYear(), currentDate.getMonth() + 1, currentDate.getDate());
        const ethiopianMonthNames = [
          'Meskerem', 'Tikimt', 'Hidar', 'Tahsas', 'Tir', 'Yekatit', 'Megabit', 'Miyazya', 'Ginbot', 'Sene', 'Hamle', 'Nehase', 'Pagumē'
        ];
        return `${ethiopianMonthNames[month - 1]} ${day}, ${year}`;
      })();

  const handleCalendarChange = (value) => {
    setCalendar(value);
  };

  return (
    <div className="header">
      <div className="breadcrumbs-title-date">
        <div className='breadcrumbs-title'>
          <div>
            <Breadcrumb separator="/" style={{color:'white'}}>
              <Breadcrumb.Item className="breadcrumb-item">{t('home')}</Breadcrumb.Item>
              <Breadcrumb.Item className="breadcrumb-item">{t(selectedItem)}</Breadcrumb.Item>
            </Breadcrumb>
          </div>
          <h1 className="title">{t(selectedItem)}</h1> 
        </div>     
        <div className="date-and-calendar">
          <Select value={calendar} onChange={handleCalendarChange} style={{ marginRight: '8px' }}>
            <Option value="gregorian">{t('Gregorian')}</Option>
            <Option value="ethiopian">{t('Ethiopian')}</Option>
          </Select>
          <span className="date">
            <CalendarOutlined style={{ marginRight: '8px' }} />
            {formattedDate}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Header;
