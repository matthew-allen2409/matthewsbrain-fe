'use client'

import React from "react";
import StoryLink from "./components/storyLink";
import { usePosts } from "./api/fetchPosts";

export default function Home() {
  const posts = usePosts();

  return (
    <>
      <div
        className="flex flex-col items-center w-screen"
      >
        {posts?.map((post) => (
          <StoryLink
            key={post.post_id}
            date={new Date(post.created_at).toLocaleDateString('en-us')}
            title={post.title}
            body={post.content}
          />
        )) || 'Loading...'}
      </div>
    </>
  );
}

