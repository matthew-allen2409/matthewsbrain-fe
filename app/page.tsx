"use client"

import Background from "./components/background";
import React from "react";
import Header from "./components/Header";
import SiteWrapper from "./components/siteWrapper";
import StoryLink from "./components/storyLink";
import Footer from "./components/Footer";

interface Post {
  post_id: number;
  title: string;
  content: string;
  created_at: string;
}

export default function Home() {
  const [posts, setPosts] = React.useState<Post[]>();


  React.useEffect(() => {
    getPosts().then((posts) => {
      setPosts(posts);
    });
  }, []);

  return (
    <SiteWrapper>
      <Header />
      <Background />
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
      <Footer />
    </SiteWrapper>
  );
}

async function getPosts(): Promise<Post[]> {
  return fetch('https://matthewsbrain.com/api/posts')
    .then(res => res.json())
    .then((data) => {
      return data;
    })
    .catch((err) => {
      console.log(err);
      return [];
    });
}
