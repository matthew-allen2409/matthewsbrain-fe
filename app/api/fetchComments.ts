import { Comment } from '../types/types';
import { baseUrl } from './useEnvVars';

const fetchComments = async (post_id: number): Promise<Comment[]> => {
  return fetch(`${baseUrl}/comments/${post_id}`)
    .then(res => res.json())
    .catch((err) => console.log(err));
}

export default fetchComments;
