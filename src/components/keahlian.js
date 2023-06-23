import React from "react";
import Icon1 from "../assets/svg/icon1.svg";
import Icon2 from "../assets/svg/icon2.svg";
import Icon3 from "../assets/svg/icon3.svg";
const Keahlian = () => {
    return(
      <section className="bg-blue-100 pt-10 pb-32" id="keahlian">
       <div className="container">
          <div className="w-full px-4 block">
            <div className="mx-auto mb-10 max-w-xl text-center">
              <h2 className="text-4xl text-ahli lg:text-5xl font-bold text-gray-600">KEAHLIAN / SKILL   </h2>
            </div>
          </div>
          <div className="flex w-full flex-wrap justify-center px-4 ">
            <div className="mb-12 p-4  ">
              <img src={Icon1} />
              <img src={Icon2} />
              <img src={Icon3} />
            </div>
          </div>
        </div>
    </section>
    )
}
export default Keahlian;