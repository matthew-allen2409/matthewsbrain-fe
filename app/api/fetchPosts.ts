import React from 'react';

import { Post } from '../types/types';

async function getPosts(): Promise<Post[]> {
  return fetch('https://matthewsbrain.com/api/posts')
    .then(res => res.json())
    .then((data) => {
      return data;
    })
    .catch((err) => {
      console.log(err);
      return [];
    });
}

export const usePosts = (): Post[] | undefined => {
  const [posts, setPosts] = React.useState<Post[]>();

  React.useEffect(() => {
    getPosts().then((posts) => {
      setPosts(posts);
    });
  }, [posts, getPosts]);

  return posts;
}
