import { Container, MessageSenderName, MessageContent } from './styles';

export const Message = ({ message }) => (
  <Container isMine={message.isMine}>
    {!message.isMine && (<MessageSenderName>{message.senderName}</MessageSenderName>) }
    <MessageContent isMine={message.isMine}>{message.content}</MessageContent>
  </Container>
);
