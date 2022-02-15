import styles from '../styles/Main.module.css';
import mainStyles from '../styles/Main.module.css';
import React from 'react';

const NotFoundPage = () => {
  return (
    <main className={mainStyles.main}>
      <div className={styles.notFound}>
        <h1 className={styles.heading}>Nope. Inget här för dig 😬</h1>
      </div>
    </main>
  );
}

export default NotFoundPage;
export { NotFoundPage };
