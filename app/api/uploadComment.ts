import { Comment, CommentInput } from '../types/types'
import { baseUrl } from './useEnvVars';

async function submitComment(comment: CommentInput): Promise<Comment> {
  console.log('baseUrl', baseUrl);
  console.log('comment input', comment);
  return await fetch(`${baseUrl}/comments`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(comment)
  })
    .then(res => res.json())
    .catch((error) => console.log(error));
}

export default submitComment;
