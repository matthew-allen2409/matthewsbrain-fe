"use client"

import React from 'react'
import { CommentInput } from '../../types/types'

interface Props {
  className?: string;
  post_id: number;
  uploadComment: (comment: CommentInput) => void;
}

const CommentForm = (props: Props) => {
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [comment, setComment] = React.useState('');

  const onSubmit = (e: any) => {
    e.preventDefault();
    props.uploadComment({
      post_id: props.post_id,
      name,
      email,
      comment
    });
  }

  return (
    <div className={"flex flex-col w-full " + props.className}>
      <form className="flex flex-col w-full">
        <label className="text-lg">Name: (optional)</label>
        <input className="border-2 border-gray-500" onChange={(e) => setName(e.target.value)} value={name} type="text" name="name" />
        <label className="text-lg">Email: (optional)</label>
        <input className="border-2 border-gray-500" value={email} onChange={(e) => setEmail(e.target.value)} type="email" name="email" />
        <label className="text-lg">Comment:</label>
        <textarea className="border-2 border-gray-500 h-64" value={comment} onChange={(e) => setComment(e.target.value)} name="comment" />
        <button className="bg-blue-500 text-white mt-2" onClick={onSubmit}>Submit</button>
      </form>
    </div>
  )
}

export default CommentForm
