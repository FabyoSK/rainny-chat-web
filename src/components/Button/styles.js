import styled from 'styled-components';

export const Container = styled.button`
  padding: 1rem;
  transition: 150ms all;
  border: 1px solid #000;
  background-color: transparent;
  border-radius: 0.5rem;
  background: var(--accent);
  color: white;
  font-size: 1rem;
  border: 0;

  width: ${(props) => (props.fullWidth === true
    ? '100%'
    : '')};

  &:hover {
    filter: brightness(0.9);
  }
`;
