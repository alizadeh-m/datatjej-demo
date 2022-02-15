import Head from 'next/head';
import mainStyles from '../../styles/Main.module.css';
import InfoView from '../../src/InfoView/InfoView';

const InfoPage = () => {
  return (
    <div className={mainStyles.container}>
      <Head>
        <title>Start</title>
        <meta name='StartDemoSite' content='Tre steg att följa för att publicera din site' />
      </Head>

      <main className={mainStyles.main}>
        <InfoView />
      </main>
    </div>
  );
};

export default InfoPage;
