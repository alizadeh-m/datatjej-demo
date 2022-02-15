import dynamic from 'next/dynamic';
import Head from 'next/head';
import styles from '../../styles/Main.module.css'

const DrawView = dynamic(() => import('../../src/DrawView/DrawView'), {
  ssr: false
});

const DrawPage = () => {
  return (
    <>
      <Head>
        <title>Draw Demo Site</title>
        <meta name="DrawtjejSite" content="Draw corner"/>
      </Head>

      <main className={styles.main}>
        <DrawView />
      </main>
    </>
  );
}

export default DrawPage;
