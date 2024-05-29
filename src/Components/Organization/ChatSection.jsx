import React, { useState } from 'react';
import { List, Input, Button } from 'antd';
import moment from 'moment';
import CustomComment from './CustomComment';
import './Styles/ChatSection.css';

const { TextArea } = Input;

const ChatSection = () => {
  const [messages, setMessages] = useState([
    {
      author: 'Tafesse Wegene',
      content: 'We need to complete the project by tomorrow.',
      datetime: moment().fromNow(),
    },
    {
      author: 'Lemma Abdo',
      content: 'Sure, I am on it!',
      datetime: moment().subtract(2, 'hours').fromNow(),
    },
  ]);
  const [inputValue, setInputValue] = useState('');

  const handleSend = () => {
    if (inputValue.trim()) {
      const newMessage = {
        author: 'You',
        content: inputValue,
        datetime: moment().fromNow(),
      };
      setMessages([...messages, newMessage]);
      setInputValue('');
    }
  };

  return (
    <div className="chat-section">
      <List
        className="comment-list"
        header={<div style={{fontFamily:'"Sora", san-serif', fontSize:'14px', color:'blue'}}>{`${messages.length} replies`}</div>}
        itemLayout="horizontal"
        dataSource={messages}
        renderItem={item => (
          <CustomComment
            
            author={item.author}
            content={item.content}
            datetime={item.datetime}
          />
        )}
      />
      <TextArea
        rows={4}
        value={inputValue}
        onChange={e => setInputValue(e.target.value)}
        placeholder="Type a message"
      />
      <Button type="primary" onClick={handleSend} style={{ marginTop: '10px' }}>
        Send
      </Button>
    </div>
  );
};

export default ChatSection;
