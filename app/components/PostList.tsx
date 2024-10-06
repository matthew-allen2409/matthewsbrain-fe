"use client"

import React from "react";
import getPosts from "../api/fetchPosts";
import { Post } from "../types/types";
import StoryLink from "./storyLink";

const PostList = () => {
  const [posts, setPosts] = React.useState<Post[]>([]);

  React.useEffect(() => {
    getPosts()
    .then((posts) => setPosts(posts));
  }, []);

  return (
    <>
      <div className="flex flex-col items-center w-screen">
        {posts?.map((post) => (
          <StoryLink
            body={post.content}
            date={new Date(post.created_at).toLocaleDateString('en-us')}
            key={post.post_id}
            post_id={post.post_id}
            title={post.title}
          />
        )) || 'Loading...'}
      </div>
    </>
  );
};

export default PostList;
