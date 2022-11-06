import React from "react";
import Karya1 from "../assets/image/Poster_AjiRamdani_Pelajar.jpg";
import karya2 from "../assets/image/Template-Ilustrasi-HUT-77-(2).jpg";
import karya4 from "../assets/image/162_Aji Ramdani_Cegah Stunting Untuk Tumbuh Anak Indonesia.jpg";
import karya3 from "../assets/image/AjiRamdani_Sukabumi_Smks-Terpadu-Ibadurrahman.jpg";
import karya5 from "../assets/image/Aji Ramdani _ Smks Terpadu Ibadurrahman.png";
import karya6 from "../assets/image/MIFPOSTER_Aji Ramdani_SMKS Terpadu Ibadurrahman_Pemuda Sebagai Garda Terdepan Pembawa Kejayaan Islam.jpg";
const Designgraphic = () => {
  return (
    <div className="design">
      <section className="bg-black pt-36 pb-32" id="clients">
        <h1 className="animate-bounce text-center text-4xl font-bold text-white">DESIGN GRAPHIC</h1>
        <div className="container">
          <div className="w-full px-4">
            <div className="mx-auto mb-16 max-w-xl text-center"></div>
          </div>
          <div className="flex w-full flex-wrap justify-center px-4">
            <div className="mb-12 p-4 transition duration-300 ease-in-out hover:bg-teal-300 hover:shadow-lg md:w-1/2">
              <div className="overflow-hidden rounded-md shadow-md">
                <img src={karya6} alt="landing-coding" width="w-full " />
              </div>
            </div>
            <div className="mb-12 p-4 transition duration-300 ease-in-out hover:bg-teal-300 hover:shadow-lg md:w-1/2">
              <div className="overflow-hidden rounded-md shadow-md">
                <img src={karya5} alt="landing-coding" width="w-full " />
              </div>
            </div>
            <div className="mb-12 p-4 transition duration-300 ease-in-out hover:bg-teal-300 hover:shadow-lg md:w-1/2">
              <div className="overflow-hidden rounded-md shadow-md">
                <img src={Karya1} alt="landing-coding" width="w-full" />
              </div>
            </div>
            <div className="mb-12 p-4 transition duration-300 ease-in-out hover:bg-teal-300 hover:shadow-lg md:w-1/2">
              <div className="overflow-hidden rounded-md shadow-md">
                <img src={karya2} alt="landing-coding" width="w-full" />
              </div>
            </div>
            <div className="mb-12 p-4 transition duration-300 ease-in-out hover:bg-teal-300 hover:shadow-lg md:w-1/2">
              <div className="overflow-hidden rounded-md shadow-md">
                <img src={karya3} alt="landing-coding" width="w-full" />
              </div>
            </div>
            <div className="mb-12 p-4 transition duration-300 ease-in-out hover:bg-teal-300 hover:shadow-lg md:w-1/2">
              <div className="overflow-hidden rounded-md shadow-md">
                <img src={karya4} alt="landing-coding" width="w-full" />
              </div>
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
export default Designgraphic;
