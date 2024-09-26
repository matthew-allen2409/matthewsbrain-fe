"use client"

import React from 'react';
import Background from '../../components/background';
import { Comment, CommentInput, Post } from '../../types/types';
import SiteWrapper from '../../components/siteWrapper';
import Header from '../../components/Header';
import styled from 'styled-components';
import ReactMarkdown from 'react-markdown';
import CommentForm from '../../components/comment/commentform';
import CommentWrapper from '../../components/comment/commentwrapper';
import Footer from '../../components/Footer';

const StyledPost = styled.div`
  z-index: 10;
  font-family: 'Source Code Pro', sans-serif;
`;

const Title = styled.div`
  padding-top 25px;
  font-weight: bold;
  color: #2da69a;
`;

export default function Page ({ params }: {params: { post: string }}) {
  const [postContent, setPostContent] = React.useState<Post>();
  const [comments, setComments] = React.useState<Comment[]>([]);

  async function submitComment(comment: CommentInput) {
    await fetch(`https://matthewsbrain.com/api/comments`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(comment)
    })

    const newComment: Comment = {
      name: comment.name,
      comment: comment.comment,
      created_at: new Date().toISOString()
    }


    setComments([...comments, newComment]);
  }

  React.useEffect(() => {
    getPost(params.post).then((post) => {
      setPostContent(post)
    });
  }, []);

  React.useEffect(() => {
    if (postContent) {
      getComments(postContent.post_id).then((comments) => setComments(comments))
    }
  }, [postContent])

  return (
  <SiteWrapper>
    <Background />
    <Header />
    { postContent &&
      <StyledPost className="w-screen flex flex-col items-center">
        <div className="flex flex-col h-screen md:w-2/5">
          <Title className="text-xl md:text-6xl mx-3 mf:mb-4">{postContent?.title}</Title>
          <ReactMarkdown className="text-[#fdf6e3] mx-3 markdown">
            {postContent?.content}
          </ReactMarkdown>
          <CommentForm className="mb-2" post_id={postContent!.post_id} uploadComment={submitComment} />
          <CommentWrapper comments={comments} />
        </div>
        <Footer />
      </StyledPost>
    }
  </SiteWrapper>
  );
}

async function getPost(post_id: string | string[] | undefined): Promise<Post> {
  return await fetch(`https://matthewsbrain.com/api/posts/${post_id}`)
    .then(res => res.json())
    .then((data) => {
      return data;
    })
    .catch((err) => {
      console.log(err);
      return {} as Post;
    });
}

const getComments = async (post_id: number) => {
  return await fetch(`https://matthewsbrain.com/api/comments/${post_id}`).then(res => res.json());
}

