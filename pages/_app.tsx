import '../styles/globals.css'
import Footer from '../src/common/Footer/Footer';
import Menu from '../src/common/Menu/Menu';
import { AppProps } from 'next/app';
import styles from '../styles/Main.module.css';

function MyApp({Component, pageProps}: AppProps) {
  return(
    <div className={styles.container}>
      <div>

        {/*<div className={styles.main}>*/}
          <Menu />
          <Component {...pageProps} />
          <Footer />
        {/*</div>*/}
      </div>
    </div>
  );
}

export default MyApp
