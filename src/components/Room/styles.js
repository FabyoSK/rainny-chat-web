import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 150ms all;
  border: 1px solid #eee;

  background-color: ${(props) => (props.isActive
    ? '#eee'
    : '')};

  &:hover {
    background-color: #eee;
    border-radius: 1rem;
  }

`;

export const RoomName = styled.div`
  margin: 2rem 0;
`;
