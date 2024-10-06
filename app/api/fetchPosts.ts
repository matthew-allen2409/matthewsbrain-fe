import { Post } from '../types/types';
import { baseUrl } from './useEnvVars';

export default async function getPosts(): Promise<Post[]> {
  return fetch(`${baseUrl}/posts`)
    .then(res => res.json())
    .then((data) => {
      return data;
    })
    .catch((err) => {
      console.log(err);
      return [];
    });
}
