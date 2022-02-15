import Image from 'next/image';
import styles from './Post.module.css';

export interface PostProps {
  id: string;
  title: string;
  date: string;
  content: string;
  imageSrc: string;
  altText: string;
}

interface Props {
  post: PostProps;
  imageLeft?: boolean;
}

const Post = (props: Props) => {
  const {imageLeft, post} = props;

  const imageComponent = (src: string, altText: string) => (
    <Image
      src={src}
      alt={altText}
      width={600}
      height={400}
    />
  );

  const textWrapperClass = imageLeft ? [styles.textWrapper, styles.textWrapperRight].join(' ') : styles.textWrapper;

  return (
    <a className={styles.postWrapper} href={`/blog/${post.id}`}>
      {imageLeft &&
          <div className={styles.imageWrapper}>
            {imageComponent(post.imageSrc, post.altText)}
          </div>
      }
      <div className={textWrapperClass}>
        <h2 className={styles.title}>{post.title}</h2>
        <p className={styles.text}>{post.content}</p>
        <div className={styles.date}>{post.date}</div>
      </div>
      {!imageLeft &&
          <div className={styles.imageWrapper}>
            {imageComponent(post.imageSrc, post.altText)}
          </div>
      }
    </a>

  );

}

export default Post;
export { Post };
