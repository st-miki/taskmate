import React from 'react';
import { Card, Avatar } from 'antd';
import moment from 'moment';


const CustomComment = ({ author, content, datetime }) => (
  <Card className="custom-comment">
    <Card.Meta
    style={{fontFamily:'"Sora", san-serif', fontSize:'14px'}}
      avatar={<Avatar>{author[0]}</Avatar>}
      title={author}
      description={(
        <div>
          <div  style={{fontFamily:'"Sora", san-serif', fontSize:'12px'}} >{content}</div>
          <div style={{fontFamily:'"Sora", san-serif', fontSize:'11px', color:'blue'}}className="comment-datetime">{datetime}</div>
        </div>
      )}
    />
  </Card>
);

export default CustomComment;
