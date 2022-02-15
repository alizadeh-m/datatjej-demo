import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer>
      <div className={styles.footer}>
        <div className={styles.footerName}>
          <a
            href={'https://www.linkedin.com/in/maryam-alizadeh-22804397/'}
            target="_blank"
            rel="noopener noreferrer"
          >
            Maryam Alizadeh
          </a> - Datatjej 2022
        </div>
        <a
          className={styles.footerLink}
          href="https://omegapoint.se/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Omegapoint AB
        </a>
      </div>
    </footer>
  );
}

export default Footer;
export { Footer };
