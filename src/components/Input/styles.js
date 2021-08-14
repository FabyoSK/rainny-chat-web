import styled from 'styled-components';

export const Container = styled.input`
  width: 100%;
  margin-right: 0 1rem;
  padding: 0 1rem;
  height: 3rem;
  border-radius: 0.25rem;
  border: 1px solid #d7d7d7;
  background: #eee;
  font-weight: 400;
  font-size: 1rem;
  background-color: ${(props) => (props.backgroundColor
    ? `var(--${props.backgroundColor})`
    : 'var(--background)')};
  color:${(props) => (props.color
    ? `var(--${props.color})`
    : 'var(--text-primary)')};
  border: 0;
  border-radius: 0.5rem;

  &::placeholder {
    color: var(--text-primary);
  }

  & + input {
    margin-top: 1rem;
  }


  border: ${(props) => (props.hasError
    ? '1px solid var(--red)'
    : '')};
`;
