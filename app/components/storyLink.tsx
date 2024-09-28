import React from 'react';

import Link from 'next/link';
import Markdown from 'react-markdown';

interface Props {
  date: string;
  title: string;
  body: string;
}

const StoryLink = (props: Props) => (
  <Link href={`/post/${props.title}`} className="flex hover:bg-cyan-100/10 mt-1 lg:mt-10 duration-150 lg:rounded-l-full border-2 border-[#859900] w-screen lg:w-3/4 h-32 z-10">
    <div className="flex h-full items-center px-2 lg:px-4 lg:border-r-2 rounded-full border-[#fdf6e3]">
      {props.date}
    </div>
    <div className="flex flex-col ml-2">
      <div className="font-bold text-[#2da69a]">{props.title}</div>
      <Markdown className="text-[#fdf6e3] max-w-prose truncate text-wrap truncate">
        {props.body.length > 100 ? `${props.body.substring(0, 500)}...` : props.body}
      </Markdown>
    </div>
  </Link>
);

export default StoryLink;
