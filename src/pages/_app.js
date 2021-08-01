import { socket, SocketContext } from '../contexts/socket';
import { RoomProvider } from '../hooks/useRoom';
import '../styles/globals.scss';
import { GlobalStyle } from '../styles/GlobalStyle';

function MyApp({ Component, pageProps }) {
  return (
    <RoomProvider>
      <SocketContext.Provider value={socket}>
        <Component {...pageProps} />
        <GlobalStyle />
      </SocketContext.Provider>
    </RoomProvider>
  );
}

export default MyApp;
