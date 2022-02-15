import Head from 'next/head';
import mainStyles from '../styles/Main.module.css';

import Image from 'next/image';

const LandingPage = () => {
  return (
    <div className={mainStyles.container}>
      <Head>
        <title>Start</title>
        <meta name='StartDemoSite' content='StartDemoSite' />
      </Head>

      <main className={mainStyles.main}>
        <Image
          alt={'code like a girl'}
          width={700}
          height={700}
          src={'https://media4.giphy.com/media/lTRUNQrthgIAGo5xvO/giphy.gif?cid=ecf05e470vfmedvk61klaa475ort9nfp9qfvrzpr6wp0bgix&rid=giphy.gif&ct=g'}
        />
      </main>
    </div>
  );
};

export default LandingPage;
