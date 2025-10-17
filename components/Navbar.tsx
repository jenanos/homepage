import { useCallback, useEffect, useState } from 'react';
import Image from 'next/image';
import { AiOutlineClose, AiOutlineMail, AiOutlineMenu } from 'react-icons/ai';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';

import NavImg from '../public/jenslogo.ico';
import type { CameraTarget, MinimapStateSetter } from '../types/minimap';
import { triggerMinimapTarget } from '../types/minimap';

type NavbarProps = {
  setMinimapState: MinimapStateSetter;
};

const Navbar = ({ setMinimapState }: NavbarProps) => {
  const [navOpen, setNavOpen] = useState(false);
  const [shadow, setShadow] = useState(false);

  useEffect(() => {
    const handleShadow = () => {
      setShadow(window.scrollY >= 90);
    };

    window.addEventListener('scroll', handleShadow);

    return () => {
      window.removeEventListener('scroll', handleShadow);
    };
  }, []);

  const setCamera = useCallback(
    (cameraName: CameraTarget, autoPilot = cameraName !== 'start') => {
      triggerMinimapTarget(setMinimapState, cameraName, autoPilot);
    },
    [setMinimapState],
  );

  const setCameraAndCloseNav = useCallback(
    (cameraName: CameraTarget, autoPilot = cameraName !== 'start') => {
      setCamera(cameraName, autoPilot);
      setNavOpen(false);
    },
    [setCamera],
  );

  return (
    <div
      style={{ backgroundColor: '#ecf0f3' }}
      className={shadow ? 'fixed w-full h-24 shadow-xl ' : 'fixed w-full h-24 z-[100]'}
    >
      <div className="flex justify-between items-center w-full h-full p-2 2xl:px-16">
        <Image
          src={NavImg}
          alt="Icon av Jens"
          height={60}
          width={150}
          className="cursor-pointer"
          onClick={() => setCamera('start')}
        />
        <div>
          <ul className="hidden md:flex">
            <li onClick={() => setCamera('about')} className="ml-10 text-sm uppercase hover:border-b">
              Om meg
            </li>
            <li onClick={() => setCamera('law')} className="ml-10 text-sm uppercase hover:border-b">
              Juss
            </li>
            <li onClick={() => setCamera('tech')} className="ml-10 text-sm uppercase hover:border-b">
              Teknologi
            </li>
            <li onClick={() => setCamera('music')} className="ml-10 text-sm uppercase hover:border-b">
              Musikk
            </li>
            <li className="ml-10 text-sm uppercase hover:border-b">
              <a href="https://www.linkedin.com/in/jens-andresen-osberg-2a09ba99/" target="_blank" rel="noreferrer">
                Ta kontakt
              </a>
            </li>
          </ul>
          <div style={{ color: '#1f2937' }} onClick={() => setNavOpen(true)} className="md:hidden">
            <AiOutlineMenu size={25} />
          </div>
        </div>
      </div>
      <div className={navOpen ? 'md:hidden fixed left-0 top-0 w-full h-screen bg-black/70' : ''}>
        <div
          className={
            navOpen
              ? ' fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500'
              : 'fixed left-[-100%] top-0 p-10 ease-in duration-500'
          }
        >
          <div>
            <div className="flex w-full items-center justify-between">
              <Image
                onClick={() => setCameraAndCloseNav('start')}
                src={NavImg}
                width={87}
                height={35}
                alt="/"
              />
              <div onClick={() => setNavOpen(false)} className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer">
                <AiOutlineClose />
              </div>
            </div>
            <div className="border-b border-gray-300 my-4" onClick={() => setCameraAndCloseNav('start')}>
              <p className="w-[85%] md:w-[90%] py-4">Jurist og teknolog</p>
            </div>
          </div>
          <div className="py-4 flex flex-col">
            <ul className="uppercase">
              <li onClick={() => setCameraAndCloseNav('about')} className="py-4 text-sm">
                Om meg
              </li>
              <li onClick={() => setCameraAndCloseNav('law')} className="py-4 text-sm">
                Juss
              </li>
              <li onClick={() => setCameraAndCloseNav('tech')} className="py-4 text-sm">
                Teknologi
              </li>
              <li onClick={() => setCameraAndCloseNav('music')} className="py-4 text-sm">
                Musikk
              </li>
            </ul>
            <div className="pt-40">
              <p className="uppercase tracking-widest text-[#561e5]">Ta kontakt!</p>
              <div className="flex items-center justify-between my-4 w-full sm:w-[80%]">
                <a href="https://www.linkedin.com/in/jens-andresen-osberg-2a09ba99/" target="_blank" rel="noreferrer">
                  <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                    <FaLinkedinIn />
                  </div>
                </a>
                <a href="https://github.com/jenanos" target="_blank" rel="noreferrer">
                  <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                    <FaGithub />
                  </div>
                </a>
                <a href="mailto:jens.osberg@gmail.com" target="_blank" rel="noreferrer">
                  <div
                    onClick={() => setNavOpen(false)}
                    className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300"
                  >
                    <AiOutlineMail />
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
