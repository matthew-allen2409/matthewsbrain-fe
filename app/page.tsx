import React from "react";
import StoryLink from "./components/storyLink";
import getPosts from "./api/fetchPosts";

export default async function Home() {
  const posts = await getPosts();

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
}

