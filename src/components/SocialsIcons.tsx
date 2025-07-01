import { IconBrandGithub, IconBrandX } from "@tabler/icons-react";
import Link from "next/link";
import React from "react";

type SocialIconLinks = {
  github?: string,
  x?: string,
  iconSize?: string,
  className?: string
}

const SocialIcons: React.FC<SocialIconLinks> = ({
  github = '/#',
  x = '/#',
  iconSize = '28',
  className = ""
}) => {
  return (
    <div className={`flex gap-4 my-5 w-max ${className}`}>
      <div className='cursor-pointer'>
        <Link href={github} target='blank'><IconBrandGithub size={iconSize} /></Link>
      </div>
      <div className='cursor-pointer'>
        <Link href={x} target='blank'><IconBrandX size={iconSize} /></Link>
      </div>
    </div>
  )
};

export default SocialIcons;