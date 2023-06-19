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
import Icon1 from "../assets/svg/icon1.svg";
import Icon2 from "../assets/svg/icon2.svg";
import Icon3 from "../assets/svg/icon3.svg";
import Swal from "sweetalert2";
import emailjs from "@emailjs/browser";
import Slide from "@mui/material/Slide";
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
      <section id="About" className="pt-36 pb-32 md:pt-10">
        <div className="conteiner">
          <div className="flex flex-wrap">
            <div className="mb-10 w-full px-4 lg:w-1/2">
              <h4 className="text- mb-3 font-bold uppercase text-blue-400">About Me</h4>
              <p className="mb-10 font-medium leading-relaxed text-white ">
                {" "}
                I am a student at the Ibadurrahman Integrated Vocational High School and I majored in software engineering, I also attended 2 extra courses, namely Robotics and the IT Club. outside of school hours I always learn about
                technology and I want to realize my dream of becoming a developer. I have mastered in the fields of graphic design, robotics, content creator, ui/ux design and Front End Development. and I want to learn more in the field
                that I'm good at
              </p>
            </div>{" "}
            <div className="w-full px-4 lg:w-1/2">
              <h3 className="text-teman mb-4 text-2xl font-semibold ">Mari Berteman</h3>
              <p className="mb-6 text-base font-medium text-white lg:text-lg"> let's be good friends so that we can establish closer brotherhood, by following each other on social media. Social media links are below</p>
              <div className="flex items-center">
                {/* github */}
                <a
                  href="https://github.com/AjiRamdaniARM"
                  target="_blank"
                  className="mr-3 flex h-9 w-9 items-center justify-center rounded-full border border-gray-300
                hover:border-teal-500  hover:bg-white "
                >
                  <img src={Github} width="20" className="fill-current" />
                </a>
                {/* linkdin */}
                <a
                  href="https://www.linkedin.com/in/aji-ramdani-ari-016bb1250"
                  target="_blank"
                  className="mr-3 flex h-9 w-9 items-center justify-center rounded-full border border-gray-300
                hover:border-teal-500  hover:bg-white "
                >
                  <img src={Linkdin} width="20" className="fill-current" />
                </a>
                {/* facebook */}
                <a
                  href="https://web.facebook.com/sahrucl.kan"
                  target="_blank"
                  className="mr-3 flex h-9 w-9 items-center justify-center rounded-full border border-gray-300
                hover:border-teal-500  hover:bg-white "
                >
                  <img src={Facebook} width="20" className="fill-current" />
                </a>
                {/* twitter */}
                <a
                  onClick={() => alert("admin belum mempunyai akun")}
                  target="_blank"
                  className="mr-3 flex h-9 w-9 items-center justify-center rounded-full border border-gray-300
                hover:border-teal-500 hover:bg-white "
                >
                  <img src={Twitter} width="20" className="fill-current" />
                </a>
                {/* youtube */}
                <a
                  href="https://www.youtube.com/channel/UCZHCz1m7pBwzDvTe9sC08Yw"
                  target="_blank"
                  className="mr-3 flex h-9 w-9 items-center justify-center rounded-full border border-gray-300
                hover:border-teal-500 hover:bg-white "
                >
                  <img src={Youtube} width="20" className="fill-current" />
                </a>
                {/* instagram */}
                <a
                  href="https://www.instagram.com/ajiramdani_04/"
                  target="_blank"
                  className="mr-3 flex h-9 w-9 items-center justify-center rounded-full border border-gray-300
                hover:border-teal-500 hover:bg-white "
                >
                  <img src={instgram} width="20" className="fill-current" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* end About section*/}
      {/* start section */}
      <section id="portofolio" className=" pt-30 pb-16 md:pt-1">
        <div className="container">
          <div className="w-full px-4">
            <div className="mx-auto mb-16 max-w-xl text-center">
              <h2 className="text-2xl font-bold text-white md:text-3xl">Skill</h2>
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
      {/* project section  */}
      <section className="bg-gray-800 pt-36 pb-32" id="project">
        <div className="container">
          <div className="w-full px-4">
            <div className="mx-auto mb-16 max-w-xl text-center">
              <h2 className="text-3xl font-bold text-white"> Project</h2>
              <h4 className="font-medium text-white">Coding || Design Graphic || UI UX Design </h4>
            </div>
          </div>
          <div className="flex w-full flex-wrap justify-center px-4">

            {/* CARD PROGRAMMER */}
              <div className="Container-card1">
                
            
              <img src="https://media.tenor.com/1mwdqr51emcAAAAM/test-typing.gif" class="w-full object-cover object-center rounded-lg shadow-md" />    
    <a href="/coding">
    <div class="relative px-4 -mt-16  ">
      <div class="card2 p-6 rounded-lg shadow-lg">
       <div class="flex items-baseline">
         <span class="bg-teal-200 text-teal-800 text-xs px-2 inline-block rounded-full  uppercase font-semibold tracking-wide">
           Project
         </span>
         <div class="ml-2 text-gray-600 uppercase text-xs font-semibold tracking-wider">
       2 baths  &bull; 3 rooms
     </div>  
       </div>
       
       <h4 class="mt-1 text-xl font-semibold uppercase leading-tight  truncate">PROGRAMMER</h4>
    
     <div class="mt-1">
       $1800
       <span class="text-gray-600 text-sm">   /wk</span>
     </div>
     <div class="mt-4">
       <span class="text-teal-600 text-md font-semibold">4/5 ratings </span>
       <span class="text-sm text-gray-600">(based on 234 ratings)</span>
     </div>  
     </div>
 
     
     </div>
     </a>
              </div>

              {/* CARD GRAPHIC DESIGN */}
              <div className="Container-card1 mt-5">
                
            
                <img src="https://media.tenor.com/pqE49x-P8UIAAAAM/dev-jokes-designer-and-client.gif" class="w-full object-cover object-center rounded-lg shadow-md" />    
      
      <div class="relative px-4 -mt-16  ">
        <div class="card2 p-6 rounded-lg shadow-lg">
         <div class="flex items-baseline">
           <span class="bg-teal-200 text-teal-800 text-xs px-2 inline-block rounded-full  uppercase font-semibold tracking-wide">
             New
           </span>
           <div class="ml-2 text-gray-600 uppercase text-xs font-semibold tracking-wider">
         2 baths  &bull; 3 rooms
       </div>  
         </div>
         
         <h4 class="mt-1 text-xl font-semibold uppercase leading-tight truncate">GRAPHIC DESIGN</h4>
      
       <div class="mt-1">
         $1800
         <span class="text-gray-600 text-sm">   /wk</span>
       </div>
       <div class="mt-4">
         <span class="text-teal-600 text-md font-semibold">4/5 ratings </span>
         <span class="text-sm text-gray-600">(based on 234 ratings)</span>
       </div>  
       </div>
   
       
       </div>
                </div>
            <div className="mb-12 p-4 transition duration-300 ease-in-out hover:bg-teal-300 hover:shadow-lg md:w-1/2">
               {/* CARD UI/UX DSIGN */}
               <div className="Container-card1">
                
            
                <img src="https://media.tenor.com/dg2ESktyq0wAAAAd/animation-creativedesign.gif" class="w-full object-cover object-center rounded-lg shadow-md" />    
      <a href="/coding">
      <div class="relative px-4 -mt-16  ">
        <div class="card2 p-6 rounded-lg shadow-lg">
         <div class="flex items-baseline">
           <span class="bg-teal-200 text-teal-800 text-xs px-2 inline-block rounded-full  uppercase font-semibold tracking-wide">
             Project
           </span>
           <div class="ml-2 text-gray-600 uppercase text-xs font-semibold tracking-wider">
         2 baths  &bull; 3 rooms
       </div>  
         </div>
         
         <h4 class="mt-1 text-xl font-semibold uppercase leading-tight  truncate">UI/UX DESIGN</h4>
      
       <div class="mt-1">
         $1800
         <span class="text-gray-600 text-sm">   /wk</span>
       </div>
       <div class="mt-4">
         <span class="text-teal-600 text-md font-semibold">4/5 ratings </span>
         <span class="text-sm text-gray-600">(based on 234 ratings)</span>
       </div>  
       </div>
   
       
       </div>
       </a>
                </div>
  
            </div>
            <div className="mb-12 p-4 transition duration-300 ease-in-out hover:bg-teal-300 hover:shadow-lg md:w-1/2">
             {/* CARD UI/UX DSIGN */}
             <div className="Container-card1">
                
            
                <img src="https://media.tenor.com/4dVRDZYVx2gAAAAd/robot.gif" class="w-full object-cover object-center rounded-lg shadow-md" />    
      <a href="/coding">
      <div class="relative px-4 -mt-16  ">
        <div class="card2 p-6 rounded-lg shadow-lg">
         <div class="flex items-baseline">
           <span class="bg-teal-200 text-teal-800 text-xs px-2 inline-block rounded-full  uppercase font-semibold tracking-wide">
             Project
           </span>
           <div class="ml-2 text-gray-600 uppercase text-xs font-semibold tracking-wider">
         2 baths  &bull; 3 rooms
       </div>  
         </div>
         
         <h4 class="mt-1 text-xl font-semibold uppercase leading-tight  truncate">ROBOTIK</h4>
      
       <div class="mt-1">
         $1800
         <span class="text-gray-600 text-sm">   /wk</span>
       </div>
       <div class="mt-4">
         <span class="text-teal-600 text-md font-semibold">4/5 ratings </span>
         <span class="text-sm text-gray-600">(based on 234 ratings)</span>
       </div>  
       </div>
   
       
       </div>
       </a>
                </div>
            </div>
          </div>
        </div>
      </section>
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
