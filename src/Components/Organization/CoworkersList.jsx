import React from 'react';
import { List, Avatar } from 'antd';

const coworkers = [
  { name: 'Kebede Belay', role: 'Developer', joinDate: '18th March 2020' },
  { name: 'Sisay Tekalegn', role: 'Designer', joinDate: '22nd April 2020' },
  { name: 'Aramde Tekeste', role: 'Manager', joinDate: '10th February 2019' },
  { name: 'Amanuel Bitew', role: 'Project Lead', joinDate: '5th June 2018' },
  { name: 'Tafesse Wegene', role: 'Back-End', joinDate: '3rd December 2021' },
  { name: 'Chala Abdisa', role: 'UX Researcher', joinDate: '20th July 2017' },
];

const CoworkersList = () => (
  <List
    itemLayout="horizontal"
    dataSource={coworkers}
    renderItem={coworker => (
      <List.Item>
        <List.Item.Meta
          avatar={<Avatar>{coworker.name[0]}</Avatar>}
          title={coworker.name}
          description={
            <React.Fragment>
              <div style={{ flex: 1, fontFamily:'"Sora", san-serif', fontSize:'12px', color:'blue' }}>{coworker.role}</div>
              <div style={{marginLeft:'750px', marginTop:'-25px', fontFamily:'"Sora", san-serif', fontSize:'12px'}}>{`Joined on ${coworker.joinDate}`}</div>
            </React.Fragment>
          }
        />
      </List.Item>
    )}
  />
);

export default CoworkersList;
