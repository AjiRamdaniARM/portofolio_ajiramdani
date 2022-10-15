import React from "react";
import coding1 from "../assets/image/code1.png";
import coding2 from "../assets/image/code2.png";
import coding3 from "../assets/image/code3.png";
import coding4 from "../assets/image/code4.png";
const Coding = () => {
  return (
    <div className="Coding">
      <section className="bg-black pt-36 pb-32" id="clients">
        <h1 className="animate-bounce text-center text-4xl font-bold text-white">PROGRAMMER</h1>
        <div className="container">
          <div className="w-full px-4">
            <div className="mx-auto mb-16 max-w-xl text-center"></div>
          </div>
          <div className="flex w-full flex-wrap justify-center px-4">
            <div className="mb-12 p-4 transition duration-300 ease-in-out hover:bg-teal-300 hover:shadow-lg md:w-1/2">
              <div className="overflow-hidden rounded-md shadow-md">
                <img src={coding1} alt="landing-coding" width="w-full" />
              </div>
            </div>
            <div className="mb-12 p-4 transition duration-300 ease-in-out hover:bg-teal-300 hover:shadow-lg md:w-1/2">
              <div className="overflow-hidden rounded-md shadow-md">
                <img src={coding2} alt="landing-coding" width="w-full" />
              </div>
            </div>
            <div className="mb-12 p-4 transition duration-300 ease-in-out hover:bg-teal-300 hover:shadow-lg md:w-1/2">
              <div className="overflow-hidden rounded-md shadow-md">
                <img src={coding3} alt="landing-coding" width="w-full" />
              </div>
            </div>
            <div className="mb-12 p-4 transition duration-300 ease-in-out hover:bg-teal-300 hover:shadow-lg md:w-1/2">
              <div className="overflow-hidden rounded-md shadow-md">
                <img src={coding4} alt="landing-coding" width="w-full" />
              </div>
            </div>
          </div>
        </div>{" "}
        <div className="w-full px-4">
          <button
            onClick={(e) => {
              e.preventDefault();
              window.location.href = "https://www.tiktok.com/@ajiramdani_ari";
            }}
            className="w-full rounded-full bg-green-400 py-3 px-8 text-base font-semibold text-white transition duration-500 hover:opacity-80 hover:shadow-lg"
          >
            Lebih Banyak Code
          </button>
        </div>{" "}
      </section>
    </div>
  );
};
export default Coding;
