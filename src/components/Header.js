import React from "react";
import "../assets/styles.scss";
import Object from "../assets/image/AJI.png"
import Object2 from "../assets/image/psd.png"


function Header() {
// data nama
const namaSaya = "AJI RAMDANI";
const profesi = "JUNIOR DEVELOPER";


    return(
      <section id="Home" className="pt-10 md:pt-5 ">
      <div className=" bg-slate-800 w-full mt-10 lg:flex lg:content-center lg:items-center lg:justify-center mx-auto ">
        <div className="Container-text p-5 ">
   <div className="text1 text-white text-4xl font-bold lg:text-5xl lg:ml-20 ">
          <h2>{namaSaya}</h2>
        </div>
        <div className="text3  lg:text-5xl font-bold  lg:mr-10 md:visible lg:hidden text-5xl  ">
          <h2>{profesi}</h2>
        </div>
        </div>
        <div className=" lg:w-1/2 mt-10 ">
          <img src={Object}  />
        </div>
        <div className="text2 lg:text-5xl  font-bold lg:mr-10  lg:visible   ">
          <h2>{profesi}</h2>
        </div>

        <div className="object2  lg:w-24  ">
          <img src={Object2}/>
        </div>
      </div>
   
    </section>
    
    )  
}

export default Header;