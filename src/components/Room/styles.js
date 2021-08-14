import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 150ms all;

  background-color: ${(props) => (props.isActive
    ? 'var(--accent)'
    : '')};
  color: ${(props) => (props.isActive
    ? 'white'
    : '')};

  &:hover {
    background-color: var(--accent);
    color: white;
    filter: brightness(1.1);
  }

`;

export const RoomName = styled.div`
  margin: 1rem 0;
`;
