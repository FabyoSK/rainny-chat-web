import { useState } from 'react';
import { Button } from '../Button';
import { Input } from '../Input';
import { Message } from '../Message';
import { Container, MessageContainer, InputContainer } from './styles';
import { Scrollbar } from '../Scrollbar';

export const Chat = ({ messages, onSendButtonClick }) => {
  const [text, setText] = useState('');

  const handleSendButtonClick = () => {
    if (text && text.length >= 0) {
      onSendButtonClick(text);
      setText('');
    }
  };

  return (
    <Container>
      <Scrollbar>
        <MessageContainer>
          {messages.map((message) => (
            <Message
              key={message.id}
              message={message}
            />
          ))}
        </MessageContainer>
      </Scrollbar>
      <InputContainer>
        <Input
          type="text"
          onChange={(event) => setText(event.target.value)}
          value={text}
          backgroundColor="foreground"
          color="text"
        />
        <Button
          onClick={handleSendButtonClick}
        >
          Send
        </Button>
      </InputContainer>
    </Container>
  );
};
