import React from 'react'

import { Comment, CommentInput } from '../../types/types';
import submitComment from '../../api/uploadComment';

interface Props {
  post_id: number;
  onSubmitComment: (comment: Comment) => void;
}

const CommentForm = ({ post_id, onSubmitComment }: Props) => {
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [comment, setComment] = React.useState('');

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const newComment: CommentInput = {
      post_id: 9,
      name,
      email,
      comment
    }

    onSubmitComment(await submitComment(newComment));
  }

  return (
    <div className={"flex flex-col w-full "}>
      <form className="flex flex-col w-full">
        <label className="text-lg">Comment:</label>
        <textarea className="border-2 border-gray-500 h-64" value={comment} onChange={(e) => setComment(e.target.value)} name="comment" />
        <label className="text-lg">Name:</label>
        <input className="border-2 border-gray-500" onChange={(e) => setName(e.target.value)} value={name} type="text" name="name" />
        <label className="text-lg">Email: (optional)</label>
        <input className="border-2 border-gray-500" value={email} onChange={(e) => setEmail(e.target.value)} type="email" name="email" />
        <button className="bg-blue-500 text-white mt-2" onClick={handleSubmit}>Submit</button>
      </form>
    </div>
  )
}

export default CommentForm
