import { useState } from 'react';
import { Message } from '../Message';

export const Chat = ({ messages, onSendButtonClick }) => {
  const [text, setText] = useState('');

  const handleSendButtonClick = () => {
    if (text && text.length >= 0) {   
      onSendButtonClick(text);
      setText('');
    }
  };

  return (
    <div>
      <h1>Messages</h1>
      <div>
        {messages.map((message) => (
          <Message key={message} message={message} />
        ))}
      </div>
      <input
        type="text"
        onChange={(event) => setText(event.target.value)}
        value={text} 
      /> 
      <button onClick={handleSendButtonClick}>
        Send
      </button>‍
    </div>
  );
}
