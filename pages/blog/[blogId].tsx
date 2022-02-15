import { useRouter } from 'next/router';
import mainStyles from '../../styles/Main.module.css';
import Head from 'next/head';
import DemoBlogPostView from '../../src/DemoBlogView/DemoBlogPostView/DemoBlogPostView';

const DemoBlogPostPage = () => {
  const router = useRouter();
  const {blogId} = router.query;

  return (
    <div className={mainStyles.container}>
      <Head>
        <title>Blog Demo Site</title>
        <meta name="BlogSite" content="Blog"/>
      </Head>

      <main className={mainStyles.main}>
        <DemoBlogPostView blogId={blogId}/>
      </main>
    </div>
  );
}

export default DemoBlogPostPage;
export { DemoBlogPostPage };
