import React from 'react'

const CommentForm = () => {
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [comment, setComment] = React.useState('');

  const onSubmit = () => {
    alert("comment submitted!");
  }

  return (
    <div className="flex flex-col w-full">
      <form className="flex flex-col w-full">
        <label className="text-lg">Name:</label>
        <input className="border-2 border-gray-500" onChange={(e) => setName(e.target.value)} value={name} type="text" name="name" />
        <label className="text-lg">Email:</label>
        <input className="border-2 border-gray-500" value={email} onChange={(e) => setEmail(e.target.value)} type="email" name="email" />
        <label className="text-lg">Comment:</label>
        <textarea className="border-2 border-gray-500 h-64" value={comment} onChange={(e) => setComment(e.target.value)} name="comment" />
        <button className="bg-blue-500 text-white" onClick={onSubmit}>Submit</button>
      </form>
    </div>
  )
}

export default CommentForm

