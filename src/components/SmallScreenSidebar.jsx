import React from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { useState } from "react";
import useMediaQuery from "../Hooks/useMediaQuery";

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

function SmallScreenSidebar({ page, selectedPage, setSelectedPage }) {
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
    <div className="mt-8">
      <ul className="flex flex-col list-none text-right relative left-10">
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
    </div>
  );
}

export default SmallScreenSidebar;
