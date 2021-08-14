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
  color: var(--text);
  font-size: 1rem;
`;

export const MessageContent = styled.div`
  background-color: ${(props) => (props.isMine
    ? 'var(--accent)'
    : 'var(--foreground)')};
  color: ${(props) => (props.isMine
    ? 'var(--title)'
    : 'var(--text)')};

  padding: 1rem;
  border-radius: 1rem;
  max-width: 80%;
`;
