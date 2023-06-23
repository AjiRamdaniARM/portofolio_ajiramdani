// import dari library
import React, { useEffect, useRef, useState } from "react";
import "../style.css";
import Github from "../assets/svg/github.svg";
import Twitter from "../assets/svg/twitter.svg";
import Facebook from "../assets/svg/facebook.svg";
import Linkdin from "../assets/svg/linkdn.svg";
import instgram from "../assets/svg/instagram.svg";
import C3 from "../assets/image/scg.jpg";
import C4 from "../assets/image/stikesmi1.jpg";
import pdf3 from "../assets/downloads/scg.pdf";
import pdf4 from "../assets/downloads/stikesmi.pdf";
import Youtube from "../assets/svg/youtube.svg";
import "../assets/style2.css";
 import Header from "./Header";

import Swal from "sweetalert2";
import emailjs from "@emailjs/browser";
import Slide from "@mui/material/Slide";
import Card from "./card";
import CardSkill from "./cadr-skill";
import Keahlian from "./keahlian";
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});
// akhir import

const Home = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm("service_hvggkm1", "template_s76c9vc", form.current, "lwnmH4wirznwX92dT").then(
      (result) => {
        Swal.fire({
          title: "Are you sure?",
          text: "You will send a message to admin !!",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Yes, Sent Message!",
        }).then((result) => {
          if (result.isConfirmed) {
            Swal.fire("message sent!", "your message will be accepted by admin.", "success");
          }
        });
      },
      (error) => {
        console.log(error.text);
      }
    );
    e.target.reset();
  };
  const nama = "Membuka jasa Graphic Design ( Banner , Poster , Thumbnail , Sticker , Thumbler , Mockup , Kemasan ). UI / UX Design ( Website, Aplikasi Android )";
  const alertbarRef = useRef(null);
  const Alert = () => {
    Swal.fire({
      title: "<h1 style='color:#00a1ff'>Open Jasa</h1>",
      text: nama,
      icon: "warning",
      buttons: true,
      dangerMode: true,
    });
  };
  const defaultOptions = {
    loop: true,
    autoplay: true,
  };

  return (
    <div className="Home">
<Header  />
      {/* About section*/}
      <center>
      <Card />
      <CardSkill />
      <Keahlian />
      </center>
    
      
     
      {/* section certificate */}
      <section className="bg-gray-700 pt-36 pb-32" id="certificate">
        <div className="container">
          <div className="w-full px-4">
            <div className="mx-auto mb-16 max-w-xl text-center">
              <h2 className="text-3xl font-bold text-white"> Certificate</h2>
              <h4 className="font-medium text-white">Kompetisi || Seminar/Webinar || Beasiswa </h4>
            </div>
          </div>
          <div className="flex w-full flex-wrap justify-center px-4">
            <div className="mb-12 p-4 transition duration-300 ease-in-out hover:bg-teal-300 hover:shadow-lg md:w-1/2">
              <a href={pdf4}>
                <div className="overflow-hidden rounded-md shadow-md">
                  <img src={C4} alt="landing-coding" width="w-full" />
                </div>
              </a>
            </div>
            <div className="mb-12 p-4 transition duration-300 ease-in-out hover:bg-teal-300 hover:shadow-lg md:w-1/2">
              <a href={pdf3}>
                <div className="overflow-hidden rounded-md shadow-md">
                  <img src={C3} alt="landing-coding" width="w-full" />
                </div>
              </a>
            </div>
            <div className="mb-12 p-4 transition duration-300 ease-in-out hover:bg-teal-300 hover:shadow-lg md:w-1/2">
              <a href="https://drive.google.com/file/d/1sg9V4PtfASPWPNlb_MQ6vo13YQnTIxxp/view?usp=sharing">
                <div className="overflow-hidden rounded-md shadow-md">
                  <img src="https://drive.google.com/uc?export=view&id=1sg9V4PtfASPWPNlb_MQ6vo13YQnTIxxp" alt="landing-coding" width="w-full" />
                </div>
              </a>
            </div>
            <div className="mb-12 p-4 transition duration-300 ease-in-out hover:bg-teal-300 hover:shadow-lg md:w-1/2">
              <a href="https://drive.google.com/file/d/17LNzsuF9fGqPvg_c0O0ihQGl-idjPLjS/view?usp=drive_link">
                <div className="overflow-hidden rounded-md shadow-md">
                  <img src="https://drive.google.com/uc?export=view&id=17LNzsuF9fGqPvg_c0O0ihQGl-idjPLjS" alt="landing-coding" width="w-full" />
                </div>
              </a>
            </div>
            <a href="https://www.linkedin.com/in/aji-ramdani-ari-016bb1250">
              {" "}
              <h1 className="flex font-bold text-blue-500 hover:text-black">
                Lebih Banyak&nbsp; <img src={Linkdin} width="20px" className="fill-current" />{" "}
              </h1>
            </a>
          </div>
        </div>
      </section>
      {/* section contact */}
      <section className="pt-36 pb-32" id="contact">
        <div className="container">
          <div className="w-full px-4">
            <div className="mx-auto mb-8 max-w-xl text-center">
              <h4 className="font-semibold text-blue-500 "> Contact</h4>
              <h2 className="mb-4 text-3xl font-bold text-white        sm:text-4xl lg:text-5xl">Hubungi Kami</h2>
              <p className="text-md font-medium text-gray-400 md:text-lg ">if you have a need or buy our services</p>
            </div>
          </div>
          <form ref={form} onSubmit={sendEmail}>
            <div className="w-full lg:mx-auto lg:w-2/3">
              <div className="mb-8 w-full px-4">
                <label for="name" className="text-base font-bold uppercase text-blue-300">
                  Nama
                </label>
                <input type="text" id="name" name="name" className="w-full rounded-md bg-gray-200 p-3 text-black focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-300" />
              </div>
              <div className="mb-8 w-full px-4">
                <label for="email" className="text-base font-bold uppercase text-blue-300">
                  Email
                </label>
                <input type="email" name="user_email" id="Email" className="w-full rounded-md bg-gray-200 p-3 text-black focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-300" />
              </div>
              <div className="mb-8 w-full px-4">
                <label for="message" className="text-base font-bold uppercase text-blue-300">
                  Pesan
                </label>
                <textarea type="message" name="message" id="message" className="h-32 w-full rounded-md bg-gray-200 p-3 text-black focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-300"></textarea>
              </div>
              <div className="w-full px-4">
                <button type="submit" value="send" className="w-full rounded-full bg-teal-400 py-3 px-8 text-base font-semibold text-white transition duration-500 hover:opacity-80 hover:shadow-lg">
                  <input type="submit" value="Send" />
                </button>
              </div>{" "}
            </div>
          </form>
        </div>
      </section>
      {/* footer */}
      <footer className="bg-black pt-24 pb-12">
        <div className="container">
          <div className="flex flex-wrap">
            <div className="mb-12 w-full px-4 font-medium text-gray-400 md:w-1/3">
              <h2 className="ari-footer mb-5 text-4xl font-bold">ARI</h2>
              <h3 className="mb-2 text-2xl font-bold">Hubungi Kami</h3>
              <p>hilmankeren0936@gmail.com</p>
              <p>Jl.Plabuhan II Sampora No.004</p>
              <p>Sukabumi</p>
            </div>
            <div className="mb-12 w-full px-4 md:w-1/3">
              <h3 className="mb-5 text-xl font-semibold text-white">Kategori Skill</h3>
              <ul className="text-gray-400">
                <li>
                  <a href="" className="mb-3 inline-block text-base hover:text-blue-300">
                    Programmer
                  </a>
                </li>
                <li>
                  <a href="" className="mb-3 inline-block text-base hover:text-blue-300">
                    Design Graphic
                  </a>
                </li>
                <li>
                  <a href="" className="mb-3 inline-block text-base hover:text-blue-300">
                    Ui Ux Design
                  </a>
                </li>
              </ul>
            </div>
            <div className="mb-12 w-full px-4 md:w-1/3">
              <h3 className="mb-5 text-xl font-semibold text-white">Kategori Tautan</h3>
              <ul className="text-gray-400">
                <li>
                  <a href="/" className="mb-3 inline-block text-base hover:text-blue-300">
                    Beranda
                  </a>
                </li>
                <li>
                  <a href="#About" className="mb-3 inline-block text-base hover:text-blue-300">
                    About
                  </a>
                </li>
                <li>
                  <a href="#portofolio" className="mb-3 inline-block text-base hover:text-blue-300">
                    Skill
                  </a>
                </li>
                <li>
                  <a href="#contact" className="mb-3 inline-block text-base hover:text-blue-300">
                    Contact
                  </a>
                </li>
                <li>
                  <a href="#clients" className="mb-3 inline-block text-base hover:text-blue-300">
                    Project
                  </a>
                </li>
                <li>
                  <a href="#certificate" className="mb-3 inline-block text-base hover:text-blue-300">
                    Certificate
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};
export default Home;
