"use client"
import clsx from 'clsx';

type LogoProps = {
      isHome?: boolean;
  };

export const Logo = ({isHome = false}: LogoProps) => 
<a href="/" style={{ color: '#052003', fontFamily: 'fantasy' }} className={clsx(isHome && "lg:hidden", "no-underline font-extrabold text-1xl leading-5 ml-4")}>
         Mullins Soldiers
      </a>;

export default Logo;
