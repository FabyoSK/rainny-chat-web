import { socket, SocketContext } from '../contexts/socket';
import { RoomProvider } from '../hooks/useRoom';
import '../styles/globals.scss';

function MyApp({ Component, pageProps }) {
  return (
  <RoomProvider>
    <SocketContext.Provider value={socket}>
      <Component {...pageProps} />
    </SocketContext.Provider>
  </RoomProvider>
  );
}

export default MyApp;
