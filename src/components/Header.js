import React from "react";
import "../assets/styles.scss";
import Object from "../assets/image/AJI.png"


function Header() {
// data nama
const namaSaya = "AJI RAMDANI";
const profesi = "JUNIOR DEVELOPER";


    return(
      <section id="Home" className="pt-10 md:pt-5  ">
      <div className=" bg-slate-800 w-full mt-10 lg:flex lg:content-center lg:items-center lg:justify-center ">
        <div className="text1 text-white font-bold lg:text-5xl lg:ml-20  ">
          <h2>{namaSaya}</h2>
        </div>
        <div className="text3  lg:text-5xl font-bold md:z-10 lg:mr-10 md:visible lg:hidden text-5xl content-center  ">
          <h2>{profesi}</h2>
        </div>
        <div className=" lg:w-1/2 ">
          <img src={Object} />
        </div>
        <div className="text2 lg:text-5xl  font-bold md:z-10 lg:mr-10  lg:visible   ">
          <h2>{profesi}</h2>
        </div>
      </div>
    </section>
    
    )  
}

export default Header;