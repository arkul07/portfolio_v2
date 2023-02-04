import React, { useState } from "react";
import useMediaQuery from "../Hooks/useMediaQuery";
import { GiHamburgerMenu } from "react-icons/gi";
import AnchorLink from "react-anchor-link-smooth-scroll";

const Link = ({ page, selectedPage, setSelectedPage }) => {
  const lowerCasePage = page.toLowerCase();
  return (
    <AnchorLink
      className={`${
        selectedPage === lowerCasePage ? "text-yellow" : ""
      } hover:text-yellow transition duration-500`}
      href={`#${lowerCasePage}`}
      onClick={() => setSelectedPage(lowerCasePage)}
    >
      {page}
    </AnchorLink>
  );
};

function Navbar({ isTopOfPage, selectedPage, setSelectedPage }) {
  const [menuToggled, setMenuToggled] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);
  const isDesktop = useMediaQuery("(min-width:768px)");

  window.addEventListener("scroll", function () {
    if (
      document.documentElement.scrollTop ||
      window.pageYOffset > window.innerHeight
    ) {
      // console.log(document.documentElement.scrollTop)
      setHasScrolled(true);
    } else {
      setHasScrolled(false);
    }
  });

  return (
    <div
      className={
        hasScrolled
          ? "flex justify-between align-middle p-4 z-10 border-b-2 border-solid border-black sticky top-0 opacity-100 bg-black"
          : "flex justify-between align-middle p-4 z-10 sticky top-0 opacity-100"
      }
    >
      <div className="text-2xl my-auto">
        <Link
          page="AryaKulkarni"
          selectedPage={selectedPage}
          setSelectedPage={setSelectedPage}
          className='hidden'
        />
        {/* <span className="font-bold">Arya</span>Kulkarni */}
      </div>
      <div className="ml-auto">
        {isDesktop ? (
          <ul className="flex justify-evenly list-none">
            <li className={hasScrolled ? "mr-5 p-3 px-8" : "mr-5 p-3 px-8"}>
              <Link
                page="About"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              />
            </li>
            <li className={hasScrolled ? "mr-5 p-3 px-8 " : "mr-5 p-3 px-8 "}>
              <Link
                page="Skills"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              />
            </li>
            <li className={hasScrolled ? "mr-5 p-3 px-8 " : "mr-5 p-3 px-8 "}>
              <Link
                page="Projects"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              />
            </li>
            <li className={hasScrolled ? "mr-5 p-3 px-8 " : "mr-5 p-3 px-8 "}>
              <Link
                page="Contact"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              />
            </li>
          </ul>
        ) : (
          <div>
            <GiHamburgerMenu
              size={32}
              onClick={() => setMenuToggled(!menuToggled)}
            />

            {menuToggled && (
              <div>
                <ul className="flex flex-col list-none">
                  <li>About</li>
                  <li>Skills</li>
                  <li>Projects</li>
                  <li>Contact</li>
                </ul>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default Navbar;
