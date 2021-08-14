import { createContext, useContext, useEffect, useState } from 'react';
import Link from 'next/link';
import { socketDispatchType } from '../constants';
import { api } from '../services/api';
import { socket } from '../contexts/socket';
import { useAuth } from './useAuth';

export const RoomContext = createContext();

const fakeMessages = [
  {
    content: 'atque culpa aliquam quisquam quidem, nisi dolore iusto veniam qui.',
    sender: {
      id: '01',
      name: 'FSK'
    },
    roomId: '01'
  },
  {
    content: 'text',
    sender: {
      id: '02',
      name: 'GG'
    },
    roomId: '02'
  },
  {
    content: 'atque culpa aliquam quisquam quidem, nisi dolore iusto veniam qui.',
    sender: {
      id: '01',
      name: 'FSK'
    },
    roomId: '02'
  },
  {
    content: 'atque culpa aliquam quisquam quidem, nisi dolore iusto veniam qui.',
    sender: {
      id: '02',
      name: 'GG'
    },
    roomId: '01'
  },
  {
    content: 'text',
    sender: {
      id: '01',
      name: 'FSK'
    },
    roomId: '01'
  },
  {
    content: 'text',
    sender: {
      id: '03',
      name: 'Fabiozin'
    },
    roomId: '01'
  },
  {
    content: 'text',
    sender: {
      id: '01',
      name: 'FSK'
    },
    roomId: '01'
  },
  {
    content: 'atque culpa aliquam quisquam quidem, nisi dolore iusto veniam qui.',
    sender: {
      id: '01',
      name: 'FSK'
    },
    roomId: '01'
  },
  {
    content: 'text',
    sender: {
      id: '01',
      name: 'FSK'
    },
    roomId: '01'
  },
  {
    content: 'text',
    sender: {
      id: '03',
      name: 'Moon'
    },
    roomId: '02'
  },
  {
    content: 'text',
    sender: {
      id: '01',
      name: 'FSK'
    },
    roomId: '01'
  }

];

export function RoomProvider(props) {
  const { children } = props;

  const { user } = useAuth();

  const [rooms, setRooms] = useState([]);
  const [currentRoom, setCurrentRoom] = useState(null);
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState([]);

  const handleFetchRooms = async () => {
    const response = await api.get('rooms');
    const data = response.data.map((room) => ({
      ...room, id: room._id
    }));
    setRooms(data);
  };

  const handleRoomSelect = (id) => {
    setCurrentRoom(id);
    socket.emit('fetch_room_message', { room_id: id });
  };

  const handleFormatMessage = (allMessages) => {
    const filterMessage = allMessages
      .map((message) => {
        if (message.sender === user.id) {
          return { ...message, id: message._id, isMine: true };
        }
        return { ...message, senderName: 'fsk' };
      });
    setMessages(filterMessage);
  };

  const handleSendMessage = (text) => {
    const message = {
      content: text,
      sender_id: user.id,
      receiver_id: currentRoom
    };
    socket.emit('send_room_message', message);
  };

  console.log('Messages =>', messages);
  console.log('Rooms  =>', rooms);
  console.log('currentRoom =>', currentRoom);

  useEffect(() => {
    socket.on('fetch_room_message', handleFormatMessage);

    socket.on('room_message', (params) => {
      setNewMessage(params);
    });

    socket.on('connect', () => {
      console.log('I\'m connected with the back-end');
    });

    return () => {
      socket.off('message');
    };
  }, [socket]);

  useEffect(() => {
    const isMine = newMessage.sender === user.id;
    setMessages([...messages, { ...newMessage, isMine }]);
  }, [newMessage]);

  return (
    <RoomContext.Provider
      value={{
        user,
        rooms,
        messages,
        currentRoom,
        handleFetchRooms,
        handleRoomSelect,
        handleSendMessage
      }}
    >
      {children}
    </RoomContext.Provider>
  );
}

export function useRoom() {
  const context = useContext(RoomContext);

  return context;
}
