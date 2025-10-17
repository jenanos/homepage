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

  useEffect(() => {
    if (!navOpen) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setNavOpen(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [navOpen]);

  const baseNavClasses = 'fixed w-full h-24 z-[100]';
  const navClasses = shadow ? `${baseNavClasses} shadow-xl` : baseNavClasses;

  return (
    <nav style={{ backgroundColor: '#ecf0f3' }} className={navClasses} aria-label="Hovedmeny">
      <div className="flex justify-between items-center w-full h-full p-2 2xl:px-16">
        <button
          type="button"
          onClick={() => setCamera('start')}
          className="cursor-pointer focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1f2937]"
          aria-label="Gå til startposisjonen"
        >
          <Image src={NavImg} alt="Icon av Jens" height={60} width={150} />
        </button>
        <div>
          <ul className="hidden md:flex">
            <li className="ml-10 text-sm uppercase hover:border-b">
              <button type="button" onClick={() => setCamera('about')} className="focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1f2937]">
                Om meg
              </button>
            </li>
            <li className="ml-10 text-sm uppercase hover:border-b">
              <button type="button" onClick={() => setCamera('law')} className="focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1f2937]">
                Juss
              </button>
            </li>
            <li className="ml-10 text-sm uppercase hover:border-b">
              <button type="button" onClick={() => setCamera('tech')} className="focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1f2937]">
                Teknologi
              </button>
            </li>
            <li className="ml-10 text-sm uppercase hover:border-b">
              <button type="button" onClick={() => setCamera('music')} className="focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1f2937]">
                Musikk
              </button>
            </li>
            <li className="ml-10 text-sm uppercase hover:border-b">
              <a
                href="https://www.linkedin.com/in/jens-andresen-osberg-2a09ba99/"
                target="_blank"
                rel="noreferrer"
                className="focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1f2937]"
              >
                Ta kontakt
              </a>
            </li>
          </ul>
          <button
            type="button"
            style={{ color: '#1f2937' }}
            onClick={() => setNavOpen(true)}
            className="md:hidden focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1f2937]"
            aria-expanded={navOpen}
            aria-controls="mobile-navigation"
            aria-label="Åpne meny"
          >
            <AiOutlineMenu size={25} />
          </button>
        </div>
      </div>
      <div className={navOpen ? 'md:hidden fixed left-0 top-0 w-full h-screen bg-black/70' : ''} role="presentation">
        <div
          id="mobile-navigation"
          className={
            navOpen
              ? 'fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500'
              : 'fixed left-[-100%] top-0 p-10 ease-in duration-500'
          }
        >
          <div>
            <div className="flex w-full items-center justify-between">
              <button
                type="button"
                onClick={() => setCameraAndCloseNav('start')}
                className="focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1f2937]"
                aria-label="Gå til startposisjonen"
              >
                <Image src={NavImg} width={87} height={35} alt="Icon av Jens" />
              </button>
              <button
                type="button"
                onClick={() => setNavOpen(false)}
                className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1f2937]"
                aria-label="Lukk meny"
              >
                <AiOutlineClose />
              </button>
            </div>
            <div className="border-b border-gray-300 my-4">
              <button
                type="button"
                onClick={() => setCameraAndCloseNav('start')}
                className="w-full text-left focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1f2937]"
              >
                <p className="w-[85%] md:w-[90%] py-4">Jurist og teknolog</p>
              </button>
            </div>
          </div>
          <div className="py-4 flex flex-col">
            <ul className="uppercase">
              <li className="py-4 text-sm">
                <button
                  type="button"
                  onClick={() => setCameraAndCloseNav('about')}
                  className="focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1f2937]"
                >
                  Om meg
                </button>
              </li>
              <li className="py-4 text-sm">
                <button
                  type="button"
                  onClick={() => setCameraAndCloseNav('law')}
                  className="focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1f2937]"
                >
                  Juss
                </button>
              </li>
              <li className="py-4 text-sm">
                <button
                  type="button"
                  onClick={() => setCameraAndCloseNav('tech')}
                  className="focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1f2937]"
                >
                  Teknologi
                </button>
              </li>
              <li className="py-4 text-sm">
                <button
                  type="button"
                  onClick={() => setCameraAndCloseNav('music')}
                  className="focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1f2937]"
                >
                  Musikk
                </button>
              </li>
            </ul>
            <div className="pt-40">
              <p className="uppercase tracking-widest text-[#561e5]">Ta kontakt!</p>
              <div className="flex items-center justify-between my-4 w-full sm:w-[80%]">
                <a
                  href="https://www.linkedin.com/in/jens-andresen-osberg-2a09ba99/"
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1f2937]"
                  aria-label="LinkedIn"
                >
                  <FaLinkedinIn />
                </a>
                <a
                  href="https://github.com/jenanos"
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1f2937]"
                  aria-label="GitHub"
                >
                  <FaGithub />
                </a>
                <a
                  href="mailto:jens.osberg@gmail.com"
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1f2937]"
                  aria-label="Send e-post"
                  onClick={() => setNavOpen(false)}
                >
                  <AiOutlineMail />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
