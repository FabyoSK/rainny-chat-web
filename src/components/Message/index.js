import { Container, MessageSenderName, MessageContent } from './styles';

export const Message = ({ message }) => (
  <Container isMine={message.isMine}>
    {/* <MessageSenderName>{message.sender.name}</MessageSenderName> */}
    <MessageContent isMine={message.isMine}>{message.content}</MessageContent>
  </Container>
);
