import { Post } from '../types/types';
import { baseUrl } from './useEnvVars';

async function fetchPost(post_id: number): Promise<Post> {
  return await fetch(`${baseUrl}/posts/${post_id}`)
    .then(res => res.json())
    .then((data) => {
      return data;
    })
    .catch((err) => {
      console.log(err);
      return {} as Post;
    });
}

export default fetchPost;

