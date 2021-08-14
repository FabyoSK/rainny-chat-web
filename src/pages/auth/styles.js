import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  margin: 0 auto;
  height: 100vh;

  background: var(--background);
  color: var(--text-secondary);
`;

export const Title = styled.h2`
  padding-bottom: 2rem;
`;

export const FormErrorText = styled.span`
  margin-top: 2rem;
  color: var(--red);
`;
