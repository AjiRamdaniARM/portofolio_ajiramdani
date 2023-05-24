import logo from "../assets/image/logo.png";
import { useState } from "react";
import Main from "./main";
import { BiHomeAlt, BiUser } from "react-icons/bi";
import { BsClipboardData, BsBriefcase, BsChatSquare } from "react-icons/bs";
import { RiContactsLine } from "react-icons/ri";
import "../assets/styles.scss";

import { Link } from "react-scroll";

const Navbarari = () => {
  const [navbar, setNavbar] = useState(false);
  return (
    <nav className="fixed bottom-2 z-50 w-full overflow-hidden lg:bottom-8">
      <div className="container mx-auto">
        <div className="mx-auto flex h-[96px] w-full max-w-[460px] items-center justify-between rounded-full bg-sky-500/20 px-5 text-2xl text-white/50 backdrop-blur-2xl">
          <Link to="Home" className=" flex h-[60px] w-[60px] cursor-pointer items-center justify-center">
            <BiHomeAlt />
          </Link>
          <Link to="portofolio" className=" flex h-[60px] w-[60px] cursor-pointer items-center justify-center">
            <BiUser />
          </Link>
          <Link to="contact" className=" flex h-[60px] w-[60px] cursor-pointer items-center justify-center">
            <RiContactsLine />
          </Link>
          <Link to="project" className=" flex h-[60px] w-[60px] cursor-pointer items-center justify-center">
            <BsBriefcase />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbarari;
