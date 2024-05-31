"use client"

import React from 'react';
import Background from '../../components/background';
import { Post } from '../../types/types';
import SiteWrapper from '../../components/siteWrapper';
import Header from '../../components/Header';
import styled from 'styled-components';
import ReactMarkdown from 'react-markdown';

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

  React.useEffect(() => {
    getPost(params.post).then((post) => {
      setPostContent(post);
    });
  }, []);


  return (
  <SiteWrapper>
    <Background />
    <Header />
      <StyledPost className="w-screen flex flex-col items-center">
        <div className="flex flex-col h-screen w-screen md:w-2/5">
          <Title className="text-xl md:text-6xl mx-3 mf:mb-4 w-screen">{postContent?.title}</Title>
          <ReactMarkdown className="text-[#fdf6e3] mx-3 markdown">
            {postContent?.content}
          </ReactMarkdown>
        </div>
      </StyledPost>
  </SiteWrapper>
  );
}

async function getPost(post_id: string | string[] | undefined): Promise<Post> {
  return fetch(`https://matthewsbrain.com/api/posts/${post_id}`)
    .then(res => res.json())
    .then((data) => {
      return data;
    })
    .catch((err) => {
      console.log(err);
      return {} as Post;
    });
}

