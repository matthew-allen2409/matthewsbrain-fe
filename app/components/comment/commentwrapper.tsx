"use client"

import React from 'react';
import fetchComments from '../../api/fetchComments';
import Comment from './comment';
import CommentForm from './commentform';
import { Comment as CommentType } from '../../types/types';

interface Props {
  post_id: number;
}

const CommentWrapper = (props: Props) => {
  const [comments, setComments] = React.useState<React.ReactNode[]>([]);

  React.useEffect(() => {
    fetchComments(props.post_id)
      .then((comments: CommentType[]) => setComments(comments.map((comment, index) => (
        <Comment
          key={index}
          comment={comment.comment}
          created_at={comment.created_at}
          name={comment.name}
        />
      ))));
  }, []);

  return (
    <div className="flex flex-col">
      <div className="mb-3">
        <CommentForm
          post_id={props.post_id}
          onSubmitComment={(comment: CommentType) => setComments([
            ...comments,
            <Comment
              key={comments.length}
              comment={comment.comment}
              created_at={comment.created_at}
              name={comment.name}
            />
          ])}
        />
      </div>
      {comments}
    </div>
  );
}

export default CommentWrapper;
