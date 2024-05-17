import React from 'react';
import styled from 'styled-components';
import computer from '../images/computer.png';
import Image from 'next/image';
import Link from 'next/link';

const InternalDiv = styled(Link)`
  display: flex;
  margin-left: 2.5%;
  height: 8vh;
  justify-content: center;
  align-items: center;
  font-family: 'Source Code Pro', sans-serif;
`;

const StyledImage = styled(Image)`
  padding-left: 10px;
`;

const Header = () => (
  <div className="w-screen h-20 flex justify-start items-center  bg-[#002b36]">
    <InternalDiv href="https://matthewsbrain.com" >
      <h1>My Hobby Website!</h1>
      <StyledImage
        className="overflow-hidden"
        src={computer}
        alt="computer"
        width={50}
        height={50}
      />
    </InternalDiv>
  </div>
)

export default Header;
