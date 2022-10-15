import React, { Component } from "react";
import panah1 from "../assets/svg/panah1.svg";

export class Tombolnavigasi extends Component {
  render() {
    return (
      <div>
        <a href="#Home" className="= fixed fixed bottom-4  right-5 z-[9999] h-14 w-14 items-center justify-center rounded-full bg-teal-400 p-4 hover:animate-pulse" id="toplogo">
          <span className="block h-5 w-5 ">
            <img src={panah1} />
          </span>
        </a>
      </div>
    );
  }
}

export default Tombolnavigasi;
