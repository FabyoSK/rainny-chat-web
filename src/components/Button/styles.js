import styled from 'styled-components';

export const Container = styled.button`
  padding: 1rem;
  transition: 150ms all;
  border: 1px solid #000;
  background-color: transparent;
  border-radius: 1rem;
  width: ${(props) => (props.fullWidth === true
    ? '100%'
    : '')};

  &:hover {
    background-color: #eee;
  }
`;
