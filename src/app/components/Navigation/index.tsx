"use client"
import { useState} from 'react';
import clsx from 'clsx';

type NavigationProps = {
  active?: string;
  isHome?: boolean;
};

export const Navigation = ({ active, isHome = false }: NavigationProps ) => {
    const [isNavOpen, setIsNavOpen] = useState(false);  

	return (
        <div className="flex justify-end py-8 w-full pr-10">
          <nav className="">
            <section className="MOBILE-MENU flex lg:hidden">
              <div
                className="HAMBURGER-ICON space-y-2"
                onClick={() => setIsNavOpen((prev) => !prev)} 
              >
                <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
                <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
                <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
              </div>
    
              <div className={isNavOpen ? "showMenuNav" : "hideMenuNav"}>
                <div
                  className="CROSS-ICON absolute top-0 right-0 px-8 py-8"
                  onClick={() => setIsNavOpen(false)}
                >
                  <svg
                    className="h-8 w-8 text-gray-600"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <line x1="18" y1="6" x2="6" y2="18" />
                    <line x1="6" y1="6" x2="18" y2="18" />
                  </svg>
                </div>
                <ul className="MENU-LINK-MOBILE-OPEN flex flex-col items-center justify-between min-h-[250px]">
                  <li className="border-b border-gray-400 my-8 uppercase">
                    <a href="/">Home</a>
                  </li>
                  <li className="border-b border-gray-400 my-8 uppercase">
                    <a href="/john-mullins">John Mullins</a>
                  </li>
                  <li className="border-b border-gray-400 my-8 uppercase">
                    <a href="/tom-mullins">Tom Mullins</a>
                  </li>
                  <li className="border-b border-gray-400 my-8 uppercase">
                    <a href="/johnny-mullins">Johnny Mullins</a>
                  </li>
                  <li className="border-b border-gray-400 my-8 uppercase">
                    <a href="/bill-mullins">Bill Mullins</a>
                  </li>
                  <li className="border-b border-gray-400 my-8 uppercase">
                    <a href="/jimmy-mullins">Jimmy Mullins</a>
                  </li>
                </ul>
              </div>
            </section>
    
            {!isHome && <ul className="DESKTOP-MENU hidden space-x-8 lg:flex font-medium">
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a className={clsx({ "active" : active === "johnMullins"})} href="/john-mullins">John Mullins</a>
              </li>
              <li>
                <a className={clsx({ "active" : active === "tomMullins"})} href="/tom-mullins">Tom Mulllins</a>
              </li>
              <li>
                <a className={clsx({ "active" : active === "johnnyMullins"})} href="/johnny-mullins">Johny Mullins</a>
              </li>
              <li>
                <a className={clsx({ "active" : active === "billMullins"})} href="/bill-mullins">Bill Mullins</a>
              </li>
              <li>
                <a className={clsx({ "active" : active === "jimmyMullins"})} href="/jimmy-mullins">Jimmy Mullins</a>
              </li>
            </ul>}
          </nav>
          <style>{`
          .hideMenuNav {
            display: none;
          }
          .showMenuNav {
            display: block;
            position: absolute;
            width: 100%;
            height: 100vh;
            top: 0;
            left: 0;
            background: white;
            z-index: 10;
            display: flex;
            flex-direction: column;
            justify-content: space-evenly;
            align-items: center;
          }
          .active {
            text-decoration: underline;
          }
        `}</style>
      </div>
	);
};

export default Navigation;