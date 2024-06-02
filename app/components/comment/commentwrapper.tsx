import React from 'react';

import Comment from './comment';
import { Comment as CommentType} from '../../types/types';

interface Props {
  comments: CommentType[];
}

const CommentWrapper = (props: Props) => {
  return (
    <div className="flex flex-col">
      {props.comments.map((comment, index) => (
        <Comment
          key={index}
          comment={comment.comment}
          created_at={comment.created_at}
          name={comment.name}
        />
      ))}
    </div>
  );
}

export default CommentWrapper;
