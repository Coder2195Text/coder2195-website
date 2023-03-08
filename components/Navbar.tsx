import { FC, useState } from "react";
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
import { motion } from "framer-motion";

const NAV_MAP: { [key: string]: JSX.Element } = {
  "/profile": (
    <>
      <BsPersonCircle className="inline-block pr-1" /> About Me
    </>
  ),
  "/projects": (
    <>
      <FaFolderOpen className="inline-block pr-1" /> Projects
    </>
  ),
  "/blog": (
    <>
      <BiNotepad className="inline-block pr-1" /> Blog
    </>
  ),
  "/profile#socials": (
    <>
      <BiLink className="inline-block pr-1" /> Socials
    </>
  ),
};

const NavBar: FC<{ highlight: string }> = ({ highlight }) => {
  const [openNav, setOpenNav] = useState(false);

  const navList = (
    <motion.ul
      className="flex flex-col gap-2 mt-2 mb-4 select-none lg:flex-row lg:gap-6 lg:items-center lg:mt-0 lg:mb-0"
      variants={{
        hidden: {
          opacity: 0,
        },
        show: {
          opacity: 1,
          transition: {
            staggerChildren: 0.2,
          },
        },
      }}
      initial="hidden"
      animate="show"
    >
      {Object.keys(NAV_MAP).map((link) => (
        <motion.li
          className="p-1 text-xl font-header"
          key={link}
          variants={{
            hidden: {
              opacity: 0,
              y: 32,
            },
            show: {
              opacity: 1,
              y: 0,
              transition: {
                ease: "easeIn",
                duration: 0.3,
              },
            },
          }}
        >
          <Link
            href={link}
            className={`text-blue-gray-100 before:bg-blue-gray-100 m-auto ${link == highlight ? "before:scale-x-100" : undefined
              }`}
            onClick={(e) => {
              if (link == highlight) {
                e.preventDefault();
              }
              setOpenNav(false);
            }}
          >
            {NAV_MAP[link]}
          </Link>
        </motion.li>
      ))}
    </motion.ul>
  );

  return (
    <Navbar
      fullWidth={true}
      className="fixed top-0 left-0 z-10 py-4 bg-blue-gray-900 border-none"
    >
      <div className="flex justify-between items-center text-blue-gray-100">
        <Typography
          as="li"
          className="py-1 mr-4 text-2xl font-bold font-header"
        >
          <Link
            href="/"
            className="text-green-200 no-underline transition-all hover:font-extrabold hover:text-green-500 hover:before:scale-x-0"
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
          className="ml-auto w-6 h-6 lg:hidden text-inherit"
          ripple={false}
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              className="w-6 h-6"
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
              className="w-6 h-6"
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
