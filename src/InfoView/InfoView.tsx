import styles from './InfoView.module.css';
import mainStyles from '../../styles/Main.module.css';

const InfoView = () => {
  return (
    <div className={styles.mainWrapper}>
      <h1 className={mainStyles.heading}>✨ Tre steg att följa för att publicera din site ✨</h1>
      <div className={mainStyles.content}>
        <div className={styles.sectionWrapper}>
          <h2>Verktyg</h2>
          <ul>
            <li className={styles.tools}><a href={'https://nextjs.org'}>Nextjs</a></li>
            <li className={styles.tools}><a href={'https://github.com/'}>Github</a></li>
            <li className={styles.tools}><a href={'https://www.netlify.com/'}>Netlify</a></li>
          </ul>
        </div>
        <div className={styles.sectionWrapper}>
          <h2>NextJS</h2>
          <ul>
            <li><a href={'https://nextjs.org/docs'} className={styles.link}> Nextjs documentation</a></li>
            <li><a href={'https://frontend-digest.com/the-benefits-of-using-nextjs-in-2021-4f071ab6fd0'} className={styles.link}>Varför next?</a></li>
            <li><a href={'https://nextjs.org/conf'} className={styles.link}>Nextjs konferens 2021</a></li>
            <li><a href={'https://www.youtube.com/watch?v=Ke90Tje7VS0'} className={styles.link}>React tutorial</a></li>
          </ul>

        </div>
        <div className={styles.sectionWrapper}>
          <h2>Github</h2>
          <a href={'https://github.com/alizadeh-m/datatjej-demo'} className={styles.link}>Koden till denna site</a>
          <br/>
          <h3>Koppla en Github repository till Netlify:</h3>
          <p>
            {`I Github gå till Settings -> Applications -> Netlify -> Configure -> (scrolla ner) Repository access`}
          </p>
        </div>
        <div className={styles.sectionWrapper}>
          <h2>Netlify</h2>
          <a href={'https://docs.netlify.com/'} className={styles.link}> Netlify documentation </a>
          <br/>
          <h3>Koppla Netlify till ditt Github konto:</h3>
          <p>
            {`I Netlify gå till User Settings -> Connected Accounts -> Edit Settings -> Connect`}
          </p>
        </div>
      </div>
    </div>
  );
}

export default InfoView;
export { InfoView };
