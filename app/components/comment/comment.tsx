import React from 'react';

interface Props {
  comment: string;
  created_at: string;
  name: string;
}

const Comment = (props: Props) => {
  return (
    <div className="border-2 w-full mt-2 min-h-32 rounded-lg bg-black border-[#859900]">
      <div className="flex row">
        <h3 className="font-bold mx-2">{props.name}</h3>
        •
        <p className="mx-2">{props.created_at}</p>
      </div>
      <p className="mx-2">{props.comment}</p>
    </div>
  );
}

export default Comment;
