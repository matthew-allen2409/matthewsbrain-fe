import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import Markdown from 'react-markdown';

const StyledLink = styled(Link)`
  height: 8rem;
  display: flex;
  z-index: 10;
  font-family: 'Source Code Pro', sans-serif;
`;

const Date = styled.div`
  height: 100%;
  display: flex;
  justify-content: column;
  align-items: center;
  padding-right: 1.5rem;
  padding-left: 0.5rem;
  color: #fdf6e3;
`;

const Title = styled.div`
  font-weight: bold;
  color: #2aa198;
`;

const Body = styled.div`
  display: flex;
  flex-direction: column;
`;

interface Props {
  date: string;
  title: string;
  body: string;
}

const StoryLink = (props: Props) => (
  <StyledLink href={`/post/${props.title}`} className="hover:bg-cyan-100/10 mt-1 lg:mt-10 duration-150 lg:rounded-l-full border-2 border-[#859900] w-screen lg:w-3/4">
    <Date className="lg:border-r-2 rounded-full border-[#fdf6e3]">
      {props.date}
    </Date>
    <Body className="ml-2">
      <Title>{props.title}</Title>
      <Markdown className="text-[#fdf6e3] max-w-prose truncate text-wrap">
        {props.body.length > 100 ? `${props.body.substring(0, 500)}...` : props.body}
      </Markdown>
    </Body>
  </StyledLink>
);

export default StoryLink;
