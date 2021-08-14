import Modal from 'react-modal';
import { useState } from 'react';
import Image from 'next/image';
import { Container, Title } from './style';
import closeImg from '../assets/close.svg';
import { Button } from '../Button';
import { Input } from '../Input';

Modal.setAppElement('#__next');

export const RoomModal = ({
  isOpen,
  onRequestClose
}) => {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');

  const [hasError, setHasError] = useState(false);

  return (
    <>
      <Modal
        isOpen={isOpen}
        onRequestClose={onRequestClose}
        overlayClassName="react-modal-overlay"
        className="react-modal-content"
      >
        <Button
          type="button"
          onClick={onRequestClose}
          className="react-modal-close"
        >
          <Image
            src={closeImg}
            alt="Close Modal"
          />
        </Button>
        <Container>
          <Title>Join a Room</Title>
          <Input
            value={name}
            type="text"
            onChange={(event) => {
              setName(event.target.value);
              setHasError(false);
            }}
            placeholder="Room Name"
            backgroundColor="foreground"
            hasError={hasError}
          />
          <Input
            type="text"
            backgroundColor="foreground"
            value={password}
            onChange={(event) => {
              setPassword(event.target.value);
              setHasError(false);
            }}
            placeholder="Password"
            hasError={hasError}
          />

          <Button
            fullWidth
            style={{ marginTop: '2rem' }}
          >
            Join
          </Button>
        </Container>
      </Modal>
    </>
  );
};
