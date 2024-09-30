import { Post } from '../types/types';

export default async function getPosts(): Promise<Post[]> {
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
