import Head from 'next/head';
import mainStyles from '../../styles/Main.module.css';
import DemoBlogView from '../../src/DemoBlogView/DemoBlogView';

const DemoBlogPage = () => {

  return (
    <div className={mainStyles.container}>
      <Head>
        <title>Blog Demo Site</title>
        <meta name="BlogSite" content="Blog"/>
      </Head>

      <main className={mainStyles.main}>
        <DemoBlogView />
      </main>
    </div>
  );
}

export default DemoBlogPage;
