import React from 'react';
import computer from '../images/computer.png';
import Image from 'next/image';
import Link from 'next/link';
import { IoLogoGithub } from "react-icons/io";
import { MdMail } from "react-icons/md";
import { home } from '../api/useEnvVars';
import { FaRssSquare } from "react-icons/fa";

const Header = () => (
  <>
    <div className="h-20" />
    <div className="fixed w-dvw h-20 bg-[#002b36] z-20">
      <Link
        className="flex height-8vh ml-4 items-center mt-5 w-fit"
        href={home || ''}
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
      <div className="absolute flex flex-row right-2 md:right-5 bottom-1 md:bottom-5">
        <Link href="mailto:matthew.allen@matthewsbrain.com">
          <MdMail className="w-5 h-5 md:w-8 md:h-8 mr-2" />
        </Link>
        <Link href="https://github.com/matthew-allen2409">
          <IoLogoGithub className=" w-5 h-5 md:w-8 md:h-8 mr-2" />
        </Link>
      <Link href={"https://matthewsbrain.com/api/rss"} >
        <FaRssSquare className={"w-5 h-5 md:w-8 md:h-8 mr-2"} />
      </Link>
      </div>
    </div>
  </>
)

export default Header;
