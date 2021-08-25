import Link from 'next/link';
import {
  useState
} from 'react';
import { Button } from '../../../components/Button';
import { Card } from '../../../components/Card';
import { Input } from '../../../components/Input';
import { useAuth } from '../../../hooks/useAuth';
import { Container, Title } from '../../../styles/authStyles';

export default function Register() {
  const { register } = useAuth();
  const [username, setUsername] = useState(null);
  const [password, setPassword] = useState(null);

  const handleRegister = () => {
    register(username, password);
  };

  return (
    <Container>
      <Card>
        <Title>Create your Account</Title>
        <Input
          type="email"
          name="username"
          placeholder="Username"
          onChange={(event) => setUsername(event.target.value)}
          value={username}
        />
        <Input
          type="password"
          name="password"
          placeholder="Password"
          onChange={(event) => setPassword(event.target.value)}
          value={password}
        />
        <Link href="/rooms">
          <Button
            fullWidth
            onClick={handleRegister}
            style={{
              marginTop: '2rem'
            }}
          >
            Submit
          </Button>
        </Link>
      </Card>
    </Container>
  );
}
