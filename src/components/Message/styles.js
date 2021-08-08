import styled from 'styled-components';

export const Container = styled.div`
  padding: 1rem 0;
  display: flex;
  flex-direction: column;
  align-items: ${(props) => (props.isMine
    ? 'flex-end'
    : 'flex-start')};
`;

export const MessageSenderName = styled.p`
  padding: 0.25rem 0;
`;

export const MessageContent = styled.div`
  background-color: ${(props) => (props.isMine
    ? '#eee'
    : '')};
  padding: 1rem;
  border: 1px solid red;
  border-radius: 1rem;
  max-width: 80%;
`;
