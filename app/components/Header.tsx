import React from 'react';
import computer from '../images/computer.png';
import Image from 'next/image';
import Link from 'next/link';
import { IoLogoGithub } from "react-icons/io";

const Header = () => (
  <>
  <div className="h-20"/>
  <div className="fixed w-screen h-20 bg-[#002b36] z-20">
    <Link
      className="flex height-8vh ml-4 items-center mt-5 w-fit"
      href="https://matthewsbrain.com"
    >
      <h1>My Hobby Website!</h1>
      <Image
        className="overflow-hidden pl-2"
        src={computer}
        alt="computer"
        width={50}
        height={50}
      />
    </Link>
    <Link className="absolute right-2 md:right-5 bottom-1 md:bottom-5" href="https://github.com/matthew-allen2409">
      <IoLogoGithub className=" w-5 h-5 md:w-8 md:h-8"/>
    </Link>
  </div>
  </>
)

export default Header;
