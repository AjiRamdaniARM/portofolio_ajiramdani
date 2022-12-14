import logo from "../assets/image/logo.png";
import { useState } from "react";
import "../assets/styles.scss";

const Navbarari = () => {
  const [navbar, setNavbar] = useState(false);
  return (
    <nav className="fixed z-10 w-full bg-black shadow">
      <div className="mx-auto justify-between px-4 md:flex md:items-center md:px-8 lg:max-w-7xl">
        <div>
          <div className="flex items-center justify-between py-3 md:block md:py-5">
            <a href="javascript:void(0)">
              <h2 className="text-2xl font-bold hover:text-black" style={{ color: "white", fontFamily: "ubuntu-bold" }}>
                {" "}
                AJI <color className="font-semibold text-blue-500">RAMDANI - ARI </color>
              </h2>
            </a>
            <div className="md:hidden">
              <button className="rounded-md p-2 text-gray-700 outline-none focus:border focus:border-gray-400" onClick={() => setNavbar(!navbar)}>
                {navbar ? (
                  <svg xmlns="http://www.w3.org/2000/svg" className="text-blue h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                    <path
                      fillRule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" className="text-blue h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
        <div>
          <div className={`mt-8 flex-1 justify-self-center pb-3 md:mt-0 md:block md:pb-0 ${navbar ? "block" : "hidden"}`}>
            <ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
              <li className="active">
                <a href="/">Home</a>
              </li>
              <li className="text-white hover:text-indigo-200">
                <a href="#clients">Project</a>
              </li>
              <li className="text-white hover:text-indigo-200">
                <a href="#certificate">Certificate</a>
              </li>
              <li className="text-white hover:text-indigo-200">
                <a href="#portofolio">Skill</a>
              </li>
            </ul>

            <div className="mt-3 space-y-2 md:inline-block lg:hidden">
              <a href="#contact" className="inline-block w-full rounded-md bg-gray-600 px-4 py-2 text-center text-white shadow hover:bg-gray-800">
                Hubungi Kami
              </a>
            </div>
          </div>
        </div>
        <div className="hidden space-x-2 md:inline-block">
          <a href="#contact" className="rounded-md bg-gray-200 px-4 py-2 text-black shadow hover:bg-blue-400 hover:text-white">
            Contact Me
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbarari;
