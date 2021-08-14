import { useRouter } from 'next/dist/client/router';
import Link from 'next/link';
import {
  useState
} from 'react';
import { Button } from '../../../components/Button';
import { Card } from '../../../components/Card';
import { Input } from '../../../components/Input';
import { useAuth } from '../../../hooks/useAuth';
import { Container, FormErrorText, Title } from '../styles';

export default function Login() {
  const { login } = useAuth();

  const [username, setUsername] = useState(null);
  const [password, setPassword] = useState(null);

  const [hasError, setHasError] = useState(false);

  const router = useRouter();

  const handleLogin = async () => {
    try {
      await login(username, password);
      router.push('/rooms');
    } catch (error) {
      setHasError(true);
    }
  };

  return (
    <Container>
      <Card>
        <Title>{hasError ? 'Invalid credentials' : 'Enter your credentials'}</Title>
        <Input
          type="text"
          name="username"
          placeholder="Username"
          onChange={(event) => {
            setUsername(event.target.value);
            setHasError(false);
          }}
          value={username}
          hasError={hasError}
        />
        <Input
          type="password"
          name="password"
          placeholder="Password"
          onChange={(event) => {
            setPassword(event.target.value);
            setHasError(false);
          }}
          value={password}
          hasError={hasError}
          onFocus={() => setHasError(false)}
        />
        {hasError && <FormErrorText />}
        <Button
          fullWidth
          onClick={handleLogin}
          style={{
            marginTop: '2rem'
          }}
        >
          Submit
        </Button>
      </Card>
    </Container>
  );
}
