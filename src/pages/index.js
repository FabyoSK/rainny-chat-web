import Head from 'next/head';

import styles from '../styles/Home.module.scss';

export default function Home() {
  // const socket = socketClient(API_URL);
  // socket.on('connection', () => {
  //   console.log(`I'm connected with the back-end`);
  // })

  return (
    <div className={styles.container}>
      <Head>
        <title>Rainny Chat | Your Chat for rainny days</title>
      </Head>
      <main className={styles.main}>
        <h1>Hello FSK</h1>
      </main>
    </div>
  );
}
