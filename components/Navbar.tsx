import { FC, useEffect, useState } from "react";
import { FaFolderOpen } from "react-icons/fa";
import { BiLink, BiNotepad } from "react-icons/bi";
import { BsPersonCircle } from "react-icons/bs";
import {
  Navbar,
  MobileNav,
  Typography,
  IconButton,
} from "@material-tailwind/react";
import Link from "next/link";

const NAV_MAP: { [key: string]: JSX.Element } = {
  "/profile": (
    <>
      <BsPersonCircle className="pr-1 inline-block" /> About Me
    </>
  ),
  "/projects": (
    <>
      <FaFolderOpen className="pr-1 inline-block" /> Projects
    </>
  ),
  "/blog": (
    <>
      <BiNotepad className="pr-1 inline-block" /> Blog
    </>
  ),
  "/profile#socials": (
    <>
      <BiLink className="pr-1 inline-block" /> Socials
    </>
  ),
};

const NavBar: FC = () => {
  const [openNav, setOpenNav] = useState(false);

  const navList = (
    <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      {Object.keys(NAV_MAP).map((link) => (
        <Typography key={link} as="li" className="p-1 font-header text-xl">
          <span>
            <Link
              href={link}
              className="text-blue-gray-100 before:bg-blue-gray-100"
              onClick={() => {
                setOpenNav(false);
              }}
            >
              {NAV_MAP[link]}
            </Link>
          </span>
        </Typography>
      ))}
    </ul>
  );

  return (
    <Navbar
      fullWidth={true}
      className="fixed left-0 top-0 bg-blue-gray-900 z-10 py-4 border-none"
    >
      <div className="flex items-center justify-between text-blue-gray-100">
        <Typography
          as="li"
          className="mr-4 py-1 font-header text-2xl font-bold"
        >
          <Link
            href="/"
            className="no-underline hover:before:scale-x-0  text-green-200 hover:text-green-500 transition-all hover:font-extrabold"
            onClick={() => {
              setOpenNav(false);
            }}
          >
            Coder2195
          </Link>
        </Typography>
        <div className="hidden lg:block">{navList}</div>
        <IconButton
          variant="text"
          className="ml-auto h-6 w-6 text-inherit lg:hidden"
          ripple={false}
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              className="h-6 w-6"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </IconButton>
      </div>
      <MobileNav open={openNav}>{navList}</MobileNav>
    </Navbar>
  );
};

export default NavBar;
