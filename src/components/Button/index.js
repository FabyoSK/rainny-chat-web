import { Container } from './styles';

export const Button = ({ children, ...rest }) => (
  <Container
    {...rest}
  >
    {children}
  </Container>
);
