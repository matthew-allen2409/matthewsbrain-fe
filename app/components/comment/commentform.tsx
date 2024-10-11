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
  const [validForm, setValidForm] = React.useState(false);
  const [touched, setTouched] = React.useState(false);

  const validateForm = (): boolean => {
    const validName = name.length ? true : false;
    const validComment = comment.length ? true : false;
    const validEmail = email.length ? /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email) : true;

    setValidForm(validName && validComment && validEmail);

    return validForm;
  }

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setTouched(true);
    if (!validateForm()) return;
    const newComment: CommentInput = {
      post_id,
      name,
      email,
      comment
    }

    onSubmitComment(await submitComment(newComment));
  }

  return (
    <form className="flex flex-col w-full">
      <label className="text-lg">Comment:</label>
      <textarea className="border-2 border-gray-500 h-64" value={comment} onChange={(e) => setComment(e.target.value)} id="comment" />
      <label className="text-lg">Name:</label>
      <input className="border-2 border-gray-500" onChange={(e) => setName(e.target.value)} value={name} type="text" id="name" />
      <label className="text-lg">Email: (optional)</label>
      <input className="border-2 border-gray-500" value={email} onChange={(e) => setEmail(e.target.value)} type="email" id="email" />
      { !validForm && touched && <p className="text-red-600 text-xl">The form is invalid!</p> }
      <button className="bg-blue-500 text-white mt-2" onClick={handleSubmit}>Submit</button>
    </form>
  );
}

export default CommentForm
