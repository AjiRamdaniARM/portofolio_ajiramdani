import React from "react";
import "../assets/styles.scss";
import Object from "../assets/image/AJI.png"



function Header() {
// data nama
const namaSaya = "AJI RAMDANI";
const profesi = "JUNIOR DEVELOPER";
const ig = "https://www.instagram.com/ajiramdani_04/";
const github ="https://github.com/AjiRamdaniARM ";
const facebook = "https://web.facebook.com/sahrucl.kan";
const twitter ="https://twitter.com/ajiramdaniAR1";
const playstore = "https://play.google.com/store/apps/dev?id=7566467722363539891&hl=en&pli=1";
const youtube ="https://www.youtube.com/channel/UCZHCz1m7pBwzDvTe9sC08Yw";
const linkedin ="https://www.linkedin.com/in/aji-ramdani-ari-016bb1250/";
const tiktok = "https://www.tiktok.com/@ajiramdani_ari";

    return(
      <section id="Home" className="pt-2 md:pt-5 ">
      <div className=" bg-gray-200 w-full mt-10 lg:flex lg:content-center lg:items-center lg:justify-center mx-auto ">
        <div className="Container-text p-5 ">
   <div className="text1 mt-10  text-4xl font-bold lg:text-5xl lg:ml-20 ">
          <h2>{namaSaya}</h2>
          <button type="button" data-ripple-light="true" className="btn hidden  select-none rounded-full w-60 bg-blue-500 lg:mt-5 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none " onClick={()=>window.my_modal_6.showModal()}>Media Sosial</button>
        </div>
        <div className="text3 text-gray-500  lg:text-5xl font-bold  lg:mr-10 md:visible lg:hidden text-5xl  ">
          <h2>{profesi}</h2>
          <button type="button" data-ripple-light="true" className=" mt-1 btn bg-blue-800 select-none rounded-full w-60  lg:mt-5 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none " onClick={()=>window.my_modal_6.showModal()}>Media Sosial</button>
        </div>
        </div>
        <div className="lg:w-1/2 mt-10 ">
          <img src={Object}  />
        </div>
        <div className="text2 lg:text-5xl text-gray-500 font-bold lg:mr-10  lg:visible   ">
          <h2>{profesi}</h2>
         
        </div>
       
      </div>








      <dialog id="my_modal_6" className="modal">
  <form method="dialog" className="modal-box ">
    <center>
      <h5 className="font-bold text-3xl ">MEDIA SOSIAL</h5>
  <a href={ig} ><div className="bg-pink-500 w-60 h-10  rounded-lg flex justify-center items-center mt-5">
       <img src="https://www.svgrepo.com/show/452229/instagram-1.svg" width={30} />
        <h6 className="ml-3 font-bold text-white">Instagram</h6>
        </div></a>
        <a href={facebook} ><div className="bg-blue-500 w-60 h-10  rounded-lg flex justify-center items-center mt-5">
        <svg xmlns="http://www.w3.org/2000/svg" width={30} viewBox="0 0 16 16" id="facebook"><path fill="#1976D2" d="M14 0H2C.897 0 0 .897 0 2v12c0 1.103.897 2 2 2h12c1.103 0 2-.897 2-2V2c0-1.103-.897-2-2-2z"></path><path fill="#FAFAFA" fill-rule="evenodd" d="M13.5 8H11V6c0-.552.448-.5 1-.5h1V3h-2a3 3 0 0 0-3 3v2H6v2.5h2V16h3v-5.5h1.5l1-2.5z" clip-rule="evenodd"></path></svg>
        <h6 className="ml-3 font-bold text-white">Facebook</h6>
        </div></a>
        <a href={github} ><div className="bg-gray-800 w-60 h-10  rounded-lg flex justify-center items-center mt-5">
        <svg xmlns="http://www.w3.org/2000/svg" width={30} viewBox="0 0 16 16" id="github"><path d="M7.999 0C3.582 0 0 3.596 0 8.032a8.031 8.031 0 0 0 5.472 7.621c.4.074.546-.174.546-.387 0-.191-.007-.696-.011-1.366-2.225.485-2.695-1.077-2.695-1.077-.363-.928-.888-1.175-.888-1.175-.727-.498.054-.488.054-.488.803.057 1.225.828 1.225.828.714 1.227 1.873.873 2.329.667.072-.519.279-.873.508-1.074-1.776-.203-3.644-.892-3.644-3.969 0-.877.312-1.594.824-2.156-.083-.203-.357-1.02.078-2.125 0 0 .672-.216 2.2.823a7.633 7.633 0 0 1 2.003-.27 7.65 7.65 0 0 1 2.003.271c1.527-1.039 2.198-.823 2.198-.823.436 1.106.162 1.922.08 2.125.513.562.822 1.279.822 2.156 0 3.085-1.87 3.764-3.652 3.963.287.248.543.738.543 1.487 0 1.074-.01 1.94-.01 2.203 0 .215.144.465.55.386A8.032 8.032 0 0 0 16 8.032C16 3.596 12.418 0 7.999 0z"></path></svg>
        <h6 className="ml-3 font-bold text-white">Github</h6>
        </div></a>
        <a href={twitter} ><div className="bg-blue-300 w-60 h-10  rounded-lg flex justify-center items-center mt-5">
        <svg xmlns="http://www.w3.org/2000/svg" width={30} viewBox="0 0 28.87 28.87" id="twitter"><g data-name="Layer 2"><g data-name="Layer 1"><rect width="28.87" height="28.87" fill="#00c7ff" rx="6.48" ry="6.48"></rect><path fill="#fff" fill-rule="evenodd" d="M11.74 18.11a3.29 3.29 0 0 1-3.05-2.28 3.26 3.26 0 0 0 1.41 0A3.28 3.28 0 0 1 8 14.26a3.18 3.18 0 0 1-.48-1.75 3.24 3.24 0 0 0 1.46.4 3.3 3.3 0 0 1-1.35-2A3.25 3.25 0 0 1 8 8.54 9.39 9.39 0 0 0 14.76 12c0-.13 0-.24-.05-.36a3.28 3.28 0 0 1 5.58-2.74.17.17 0 0 0 .17.05 6.6 6.6 0 0 0 1.91-.73A3.36 3.36 0 0 1 21 10a6.3 6.3 0 0 0 1.83-.49l-.33.49a6.44 6.44 0 0 1-1.19 1.13.11.11 0 0 0-.05.1 9.09 9.09 0 0 1-.06 1.46 9.66 9.66 0 0 1-.85 2.92 9.44 9.44 0 0 1-1.77 2.59 8.77 8.77 0 0 1-4.51 2.51 9.79 9.79 0 0 1-1.83.22A9.27 9.27 0 0 1 7 19.52l-.08-.05a6.64 6.64 0 0 0 3.26-.47 6.53 6.53 0 0 0 1.56-.89z"></path></g></g></svg>
        <h6 className="ml-3 font-bold text-white">Twiter</h6>
        </div></a>
        <a href={youtube} ><div className="bg-red-400 w-60 h-10  rounded-lg flex justify-center items-center mt-5">
        <svg xmlns="http://www.w3.org/2000/svg" width={30} viewBox="0 0 28.87 28.87" id="youtube"><g data-name="Layer 2"><g data-name="Layer 1"><rect width="28.87" height="28.87" fill="#fd3832" rx="6.48" ry="6.48"></rect><path fill="#fff" fill-rule="evenodd" d="M8 19.77a1.88 1.88 0 0 1-1.24-1.21c-.54-1.48-.7-7.66.34-8.88A2 2 0 0 1 8.46 9c2.79-.3 11.41-.26 12.4.1a1.94 1.94 0 0 1 1.22 1.17c.59 1.53.61 7.09-.08 8.56a1.89 1.89 0 0 1-.87.88c-1.04.52-11.75.51-13.13.06zm4.43-2.9l5-2.6-5-2.62z"></path></g></g></svg>
        <h6 className="ml-3 font-bold text-white">Youtube</h6>
        </div></a>
        <a href={linkedin} ><div className="bg-blue-900 w-60 h-10  rounded-lg flex justify-center items-center mt-5 ">
        <svg xmlns="http://www.w3.org/2000/svg" width={30} viewBox="0 0 28.87 28.87" id="linkedin"><g data-name="Layer 2"><g data-name="Layer 1"><rect width="28.87" height="28.87" fill="#0b86ca" rx="6.48" ry="6.48"></rect><path fill="#fff" d="M8 12h3v9.68H8zm1.53-4.81a1.74 1.74 0 11-1.74 1.75 1.74 1.74 0 011.74-1.75M12.92 12h2.89v1.32a3.16 3.16 0 012.85-1.56c3 0 3.61 2 3.61 4.61v5.31h-3V17c0-1.12 0-2.57-1.56-2.57s-1.8 1.22-1.8 2.48v4.79h-3z"></path></g></g></svg>
        <h6 className="ml-3 font-bold text-white">Linkedin</h6>
        </div></a>
        <a href={playstore} ><div className="bg-gray-300 w-60 h-10  rounded-lg flex justify-center items-center mt-5">
        <svg xmlns="http://www.w3.org/2000/svg" width={30} viewBox="0 0 404 404" id="playstore"><path fill="#f6b94c" d="m21.963 402.378 373.648-186.806c11.185-5.592 11.185-21.553 0-27.145L21.963 1.622C11.872-3.423 0 3.914 0 15.194v373.612c0 11.28 11.872 18.617 21.963 13.572z"></path><path fill="#52c1ff" d="M5.068 3.875C2.007 6.593 0 10.559 0 15.194v373.612c0 4.635 2.007 8.601 5.068 11.319L203.193 202 5.068 3.875z"></path><path fill="#67c7a5" d="M276.377 128.816 21.963 1.622C16.018-1.35 9.458-.022 5.068 3.875L203.193 202l73.184-73.184z"></path><path fill="#f56c61" d="M5.068 400.125c4.39 3.897 10.95 5.225 16.895 2.253l254.414-127.195L203.193 202 5.068 400.125z"></path></svg>
        <h6 className="ml-3 font-bold text-black">Playstore</h6>
        </div></a>
        <a href={tiktok} ><div className="bg-pink-300 w-60 h-10  rounded-lg flex justify-center items-center mt-5">
        <svg xmlns="http://www.w3.org/2000/svg" width={30} height="512" fill-rule="evenodd" clip-rule="evenodd" image-rendering="optimizeQuality" shape-rendering="geometricPrecision" text-rendering="geometricPrecision" viewBox="0 0 512 512" id="tiktok"><defs><linearGradient id="a" x1="67.83" x2="474.19" y1="82.42" y2="389.98" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#67c4ce"></stop><stop offset="1" stop-color="#e62a58"></stop></linearGradient></defs><path fill="url(#a)" d="M256 0c141.39,0 256,114.61 256,256 0,141.39 -114.61,256 -256,256 -141.39,0 -256,-114.61 -256,-256 0,-141.39 114.61,-256 256,-256z"></path><path fill="#fff" d="M313.5 106.01c0.01,4.58 1.36,70.83 70.87,74.96 0,19.1 0.02,32.95 0.02,51.18 -5.26,0.3 -45.76,-2.64 -70.97,-25.12l-0.08 99.64c0.96,69.16 -49.93,111.24 -116.46,96.7 -114.71,-34.31 -76.59,-204.44 38.59,-186.24 0,54.93 0.03,-0.01 0.03,54.93 -47.58,-7 -63.5,32.58 -50.85,60.93 11.5,25.8 58.88,31.39 75.41,-5.01 1.87,-7.12 2.8,-15.25 2.8,-24.37l0 -197.85 50.64 0.25z"></path></svg>
        <h6 className="ml-3 font-bold text-white">Tiktok</h6>
        </div></a></center>
  </form>
  <form method="dialog" className="text-white text-bold text-2xl">
    <button>Keluar</button>
  </form>
</dialog>  
    </section>
    )  
}

export default Header;