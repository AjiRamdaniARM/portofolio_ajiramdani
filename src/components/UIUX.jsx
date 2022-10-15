import React from "react";
import ui1 from "../assets/image/ui1.png";
import ui2 from "../assets/image/ui2.png";
import ui3 from "../assets/image/ui3.png";
import ui4 from "../assets/image/ui4.png";

const Uiux = () => {
  return (
    <div className="Uiux">
      <section className="bg-black pt-36 pb-32" id="clients">
        <h1 className="animate-bounce text-center text-4xl font-bold text-white">UI/UX DESIGN</h1>
        <div className="container">
          <div className="w-full px-4">
            <div className="mx-auto mb-16 max-w-xl text-center"></div>
          </div>
          <div className="flex w-full flex-wrap justify-center px-4">
            <div className="mb-12 p-4 transition duration-300 ease-in-out hover:bg-teal-300 hover:shadow-lg md:w-1/2">
              <a href="https://www.figma.com/file/jLiLW2T9AXPOZ0xzV2tLUN/Untitled?node-id=0%3A1">
                <div className="overflow-hidden rounded-md shadow-md">
                  <img src={ui1} alt="landing-coding" width="w-full " />
                </div>
              </a>
            </div>
            <div className="mb-12 p-4 transition duration-300 ease-in-out hover:bg-teal-300 hover:shadow-lg md:w-1/2">
              <a href="https://www.figma.com/file/hRNwdm0DOONJZaKa2FxfVK/Untitled?node-id=0%3A1">
                <div className="overflow-hidden rounded-md shadow-md">
                  <img src={ui3} alt="landing-coding" width="w-full" />
                </div>
              </a>
            </div>
            <div className="mb-12 p-4 transition duration-300 ease-in-out hover:bg-teal-300 hover:shadow-lg md:w-1/2">
              <a href="https://www.figma.com/file/UGYgznRbQsJCVFq6Zt4mcD/Untitled?node-id=0%3A1">
                <div className="overflow-hidden rounded-md shadow-md">
                  <img src={ui2} alt="landing-coding" width="w-full" />
                </div>
              </a>
            </div>

            <div className="mb-12 p-4 transition duration-300 ease-in-out hover:bg-teal-300 hover:shadow-lg md:w-1/2">
              <a href="https://www.figma.com/file/N0L1oYsccnh4RZDOzKuf5Z/Untitled?node-id=2%3A2">
                <div className="overflow-hidden rounded-md shadow-md">
                  <img src={ui4} alt="landing-coding" width="w-full" />
                </div>
              </a>
            </div>
          </div>
        </div>{" "}
        <div className="w-full px-4">
          <button
            onClick={(e) => {
              e.preventDefault();
              window.location.href = "https://www.instagram.com/ajiramdani_04/";
            }}
            className="w-full rounded-full bg-teal-400 py-3 px-8 text-base font-semibold text-white transition duration-500 hover:opacity-80 hover:shadow-lg"
          >
            Lebih Banyak Karya
          </button>
        </div>{" "}
      </section>
    </div>
  );
};
export default Uiux;
