import posts from '../../../public/Posts.json';
import Image from 'next/image';
import styles from './DemoBlogPostView.module.css';

interface Props {
  blogId?: string | string[];
}

const DemoBlogPostView = (props: Props) => {
  const {blogId} = props;

  const post = posts.find(p => p.id === blogId);

  return (
    post !== undefined ?
      (
        <div className={styles.postWrapper}>
          <h1>{post.title}</h1>
          <div className={styles.postDate}>{post.date}</div>
          <Image
            src={post.imageSrc}
            alt={post.altText}
            width={600}
            height={400}
          />
          <p className={styles.postText}>{post.content}</p>
        </div>
      ) : null
  );
}

export default DemoBlogPostView;
export { DemoBlogPostView };
