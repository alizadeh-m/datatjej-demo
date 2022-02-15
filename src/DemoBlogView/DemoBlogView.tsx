import React from 'react';
import mainStyles from '../../styles/Main.module.css';
import Post, { PostProps } from './Post/Post';

import posts from '../../public/Posts.json';

const DemoBlogView = () => {

  return (
    <>
      <h1 className={mainStyles.heading}>👩‍💻 XoXo Gossip Girl 👩‍💻</h1>
      {posts.map((post: PostProps, index: number) => (
        <Post post={post} key={index} imageLeft={index % 2 === 1}/>
      ))}
    </>
  );
}

export default DemoBlogView;
export { DemoBlogView };
