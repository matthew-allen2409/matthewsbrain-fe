import { Comment } from '../types/types';

  const fetchComments = async (post_id: number): Promise<Comment[]> => {
    return await fetch(`https://matthewsbrain.com/api/comments/${post_id}`).then(res => res.json());
  }

  export default fetchComments;
