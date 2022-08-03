import React, { useState, useEffect } from "react";
import Image from "next/image";
import NavImg from "../public/jenslogo.ico";
import Link from "next/link";
import { AiOutlineClose, AiOutlineMail, AiOutlineMenu } from 'react-icons/ai';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { BsFillPersonLinesFill } from 'react-icons/bs';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [navBg, setNavBg] = useState('#ecf0f3');
  const [shadow, setShadow] = useState(false);
  const [linkColor, setLinkColor] = useState('#1f2937');
  const handleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY >= 90) {
        setShadow(true);
      } else {
        setShadow(false);
      }
    };
    window.addEventListener('scroll', handleShadow);
  }, []);

  return (
    <div
      style={{ backgroundColor: `${navBg}` }}
      className={
        shadow
          ? 'fixed w-full h-24 shadow-xl '
          : 'fixed w-full h-24 z-[100]'
      }
    >

      <div className="flex justify-between items-center w-full h-full p-2 2xl:px-16">
        <Link href='/'>
          <a>
            <Image
              src={NavImg}
              alt='Icon av Jens'
              height='60'
              width='150'
              className="cursor-pointer" />
          </a>
        </Link>
        <div>
          <ul className="hidden md:flex">
            <li className="ml-10 text-sm uppercase hover:border-b">
              <Link href='/'>
                Om meg
              </Link>
            </li>
            <li className="ml-10 text-sm uppercase hover:border-b">
              <Link href='/'>
                Juss
              </Link>
            </li>
            <li className="ml-10 text-sm uppercase hover:border-b">
              <Link href='/'>
                Teknologi
              </Link>
            </li>
            <li className="ml-10 text-sm uppercase hover:border-b">
              <Link href='/'>
                Prosjekter
              </Link>
            </li>
          </ul>
          <div
            style={{ color: `${linkColor}` }}
            onClick={handleNav}
            className='md:hidden'
          >
            <AiOutlineMenu size={25} />
          </div>
        </div>
      </div>
      <div
        className={
          nav ? 'md:hidden fixed left-0 top-0 w-full h-screen bg-black/70' : ''
        }
      >
        <div className={
          nav
            ? ' fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500'
            : 'fixed left-[-100%] top-0 p-10 ease-in duration-500'
        }>
          <div>

            <div className="flex w-full items-center justify-between">
              <Link href='/'>
                <a>
                  <Image
                    src={NavImg}
                    width='87'
                    height='35'
                    alt='/'
                  />
                </a>
              </Link>
              <div
                onClick={handleNav}
                className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer'
              >
                <AiOutlineClose />

              </div>
            </div>
            <div className="border-b border-gray-300 my-4">
              <p className="w-[85%] md:w-[90%] py-4">
                Slagordet til Jens
              </p>
            </div>
          </div>
          <div className="py-4 flex flex-col">
            <ul className="uppercase">
              <Link href='/a'>
                <li onClick={() => setNav(false)} className='py-4 text-sm'>
                  Om meg
                </li>
              </Link>
              <Link href='/b'>
                <li onClick={() => setNav(false)} className='py-4 text-sm'>
                  Om meg
                </li>
              </Link>
              <Link href='/c'>
                <li onClick={() => setNav(false)} className='py-4 text-sm'>
                  Om meg
                </li>
              </Link>
              <Link href='/'>
                <li onClick={() => setNav(false)} className='py-4 text-sm'>
                  Om meg
                </li>
              </Link>
            </ul>
            <div className='pt-40'>
              <p className='uppercase tracking-widest text-[#561e5]'>
                Ta kontakt!
              </p>
              <div className="flex items-center justify-between my-4 w-full sm:w-[80%]">

                <a
                  href="https://google.com"
                  target='_blank'
                  rel="noreferrer"
                >
                  <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                    <FaLinkedinIn />
                  </div>

                </a>
                <a
                  href="https://google.com"
                  target='_blank'
                  rel="noreferrer"
                >
                  <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                    <FaGithub />
                  </div>

                </a>
                <Link href='/#contact'>
                  <div
                    onClick={() => setNav(!nav)}
                    className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'
                  >
                    <AiOutlineMail />
                  </div>
                </Link>
                <Link href='/resume'>
                  <div
                    onClick={() => setNav(!nav)}
                    className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'
                  >
                    <BsFillPersonLinesFill />
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;