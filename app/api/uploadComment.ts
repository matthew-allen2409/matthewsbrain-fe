import { Comment, CommentInput } from '../types/types'


async function submitComment(comment: CommentInput): Promise<Comment> {
  await fetch(`https://matthewsbrain.com/api/comments`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(comment)
  }).catch((error) => console.log(error));

  const newComment: Comment = {
    name: comment.name,
    comment: comment.comment,
    created_at: new Date().toISOString()
  }

  return newComment;
}

export default submitComment;
