import styles from './Menu.module.css';
import { useRouter } from 'next/router';

const Menu = () => {
  const router = useRouter();

  return (
    <div className={styles.menuWrapper}>
      <div className={styles.menu}>
        <a className={[styles.menuLink, router.asPath === '/' ? styles.menuLinkSelected : ''].join(' ')} href={'/'}>Start</a>
        <a className={[styles.menuLink, router.asPath === '/info' ? styles.menuLinkSelected : ''].join(' ')} href={'/info'}>Info</a>
        <a className={[styles.menuLink, router.asPath.includes('blog') ? styles.menuLinkSelected : ''].join(' ')} href={'/blog'}>Blogg</a>
        <a className={[styles.menuLink, router.asPath.includes('draw') ? styles.menuLinkSelected : ''].join(' ')} href={'/draw'}>Rita</a>
        <a className={styles.menuLink} href={'https://nextjs.org/showcase'}>NextJs-Showcase</a>
      </div>
    </div>
  );
}

export default Menu;
export { Menu };
