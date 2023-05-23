// import dari library
import React, { useEffect, useRef, useState } from "react";
import "../style.css";
import Typewriter from "typewriter-effect";
import coding from "../assets/svg/coding.svg";
import Logo2004 from "../assets/image/aji.png";
import Github from "../assets/svg/github.svg";
import Twitter from "../assets/svg/twitter.svg";
import Facebook from "../assets/svg/facebook.svg";
import Linkdin from "../assets/svg/linkdn.svg";
import instgram from "../assets/svg/instagram.svg";
import Design from "../assets/svg/design.svg";
import C3 from "../assets/image/scg.jpg";
import C4 from "../assets/image/stikesmi1.jpg";
import pdf3 from "../assets/downloads/scg.pdf";
import pdf4 from "../assets/downloads/stikesmi.pdf";
import Youtube from "../assets/svg/youtube.svg";
import C2 from "../assets/image/certificate3.jpg";
import Blob from "../assets/image/blob.png";
import pdf2 from "../assets/downloads/certificate nasional.pdf";
import "../assets/styles.scss";
import pdf1 from "../assets/downloads/AJI RAMDANI.pdf";
import "../assets/style2.css";
import ui from "../assets/svg/uiux.svg";
import Animasi1 from "../assets/image/animasi1.svg";
import Icon1 from "../assets/svg/icon1.svg";
import C1 from "../assets/image/certificate1.jpg";
import Icon2 from "../assets/svg/icon2.svg";
import Icon3 from "../assets/svg/icon3.svg";
import robotiks from "../assets/svg/robotik.svg";
import Swal from "sweetalert2";
import emailjs from "@emailjs/browser";
import Popup from "reactjs-popup";

import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";
import { Player, Controls } from "@lottiefiles/react-lottie-player";
import Content from "../components/popup";
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});
// akhir import

const Home = () => {
  const [loading, setLoading] = useState(undefined);
  const [done, setDone] = useState(undefined);
  const [cat, setCat] = useState("");

  useEffect(() => {
    getCat();
  }, []);

  const getCat = () => {
    setLoading(undefined);
    setDone(undefined);
    setBuka(false);

    setTimeout(() => {
      fetch(setBuka(true))
        .then((res) => res.json())
        .then((data) => {
          setCat(data.file);
          setLoading(true);
          setTimeout(() => {
            setDone(true);
          }, 1000);
        })
        .catch((err) => console.log(err));
    }, 2200);
  };

  const [open, setOpen] = React.useState(undefined);
  const [buka, setBuka] = React.useState(undefined);
  // const handleClickOpen = () => {
  //   setOpen(true);
  // };

  const handleClose = () => {
    setOpen(false);
  };

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
    
      <div>
        {!done ? (
          <Dialog
            PaperProps={{
              style: {
                backgroundColor: "transparent",
                boxShadow: "none",
              },
            }}
            className="bg-black/50"
            TransitionComponent={Transition}
            keepMounted
            onClose={handleClose}
            aria-describedby="alert-dialog-slide-description"
          >
            <Player loading={loading} options={defaultOptions} src="https://assets10.lottiefiles.com/packages/lf20_p8bfn5to.json" style={{ height: "300px", width: "300px" }}></Player>
            {/* {!done ?} */}
            {/* {isLoading && <Player options={defaultOptions} src="https://assets10.lottiefiles.com/packages/lf20_p8bfn5to.json" style={{ height: "300px", width: "300px" }}></Player>}{" "} */}
            {/* <DialogTitle className="color-co">{"Open Jasa Graphic Design"}</DialogTitle>
<DialogContent>
 <div className="Animasi1">
   {" "}
   <img src={Animasi1} />
 </div>

 <DialogContentText id="alert-dialog-slide-description">{nama}</DialogContentText>
</DialogContent>
<DialogActions>
 <Button onClick={handleClose}>Tidak Jadi</Button>
 <Button onClick={handleClose}>Lanjut</Button>
</DialogActions> */}
          </Dialog>
        ) : (
          <div>{cat}</div>
        )}
      </div>

      {/* end animasi Popup */}

      {/* sectiom hero */}
      <section id="Home" className="pt-10 md:pt-5 ">
        <div className="container">
          <div className="flex flex-wrap">
            <div className="w-full self-center px-4 lg:w-1/2">
              <h1 className="text2 block font-semibold text-white md:text-xl lg:text-2xl">
                {" "}
                Hello,<span className="font1 text-rgblue mt-1  block text-4xl font-bold lg:text-5xl"> I Am Aji Ramdani</span>
              </h1>
              <p className="text-secondary mb-5 text-lg font-medium text-white md:mt-2 md:text-sm">
                Graphic Designer || UI UX Designer || Web Develover
                <span className="mb-12 block font-bold">
                  School Majoring In
                  <span className="text-blue-500">
                    <Typewriter
                      options={{
                        autoStart: true,
                        loop: true,
                        delay: 100,
                        strings: ["Sofware Enginering", "Smks Terpadu Ibadurrahman"],
                      }}
                    />
                  </span>
                </span>
              </p>
              <Popup modal trigger={ <button className="jasa rounded-lg py-3 px-5 text-base font-bold text-white transition duration-300 ease-in-out hover:bg-teal-300 hover:shadow-lg"> Jasa Design</button>} >
              {close => <Content close={close} />}
              </Popup>
              &nbsp;
              <a href="https://chat.whatsapp.com/EX1dmwekW0k0PZcHJaxN5R" className="coding-jasa rounded-lg py-3 px-8 text-base font-bold text-white transition duration-300 ease-in-out hover:bg-teal-300 hover:shadow-lg">
                Jasa Coding
              </a>
            </div>{" "}
            <div className="w-full self-end px-4 lg:w-1/2">
              <div className=" relative mt-10 lg:right-0 lg:mt-9">
                <img src={Logo2004} alt="ARI" className=" z-10 mx-auto max-w-full  " />
                {/* <span className=" absolute bottom-0 -z-10 pt-2">
                  {" "}
                  <img src={Blob} alt="shape" className="mx-auto mt-0 max-w-full " />
                </span> */}
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* end section */}
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
      <section className="bg-gray-800 pt-36 pb-32" id="clients">
        <div className="container">
          <div className="w-full px-4">
            <div className="mx-auto mb-16 max-w-xl text-center">
              <h2 className="text-3xl font-bold text-white"> Project</h2>
              <h4 className="font-medium text-white">Coding || Design Graphic || UI UX Design </h4>
            </div>
          </div>
          <div className="flex w-full flex-wrap justify-center px-4">
            <div className="mb-12 p-4 transition duration-300 ease-in-out hover:bg-teal-300 hover:shadow-lg md:w-1/2">
              <a href="/coding">
                <div className="overflow-hidden rounded-md shadow-md">
                  <img src={coding} alt="landing-coding" width="w-full" />
                  <h3 className="mb-5 mb-3 text-xl font-semibold text-white"> Project Coding</h3>
                  <p className="text-base font-medium text-gray-500">Kumpulan Project-project hasil ngoding</p>
                </div>
              </a>
            </div>
            <div className="mb-12 p-4 transition duration-300 ease-in-out hover:bg-teal-300 hover:shadow-lg md:w-1/2">
              <a href="/design">
                <div className="overflow-hidden rounded-md shadow-md">
                  <img src={Design} alt="landing-coding" width="w-full" />
                  <h3 className="mb-5 mb-3 text-xl font-semibold text-white"> Project Design Graphic</h3>
                  <p className="text-base font-medium text-gray-500">Kumpulan Project-project hasil Ngedesign</p>
                </div>
              </a>
            </div>
            <div className="mb-12 p-4 transition duration-300 ease-in-out hover:bg-teal-300 hover:shadow-lg md:w-1/2">
              <a href="/uiux">
                <div className="overflow-hidden rounded-md shadow-md">
                  <img src={ui} alt="landing-coding" width="w-full" />
                  <h3 className="mb-5 mb-3 text-xl font-semibold text-white"> Project UI UX DESIGN</h3>
                  <p className="text-base font-medium text-gray-500">Kumpulan Project-project hasil Ngedesign web, aplikasi</p>
                </div>
              </a>
            </div>
            <div className="mb-12 p-4 transition duration-300 ease-in-out hover:bg-teal-300 hover:shadow-lg md:w-1/2">
              <a onClick={() => alert("belum ada project tersedia")}>
                <div className="overflow-hidden rounded-md shadow-md">
                  <img src={robotiks} alt="landing-coding" width="w-full" />
                  <h3 className="mb-5 mb-3 text-xl font-semibold text-white"> Project Robotics</h3>
                  <p className="text-base font-medium text-gray-500">Kumpulan Project-project hasil bikin robots</p>
                </div>
              </a>
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
              <a href={pdf1}>
                <div className="overflow-hidden rounded-md shadow-md">
                  <img src={C1} alt="landing-coding" width="w-full" />
                </div>
              </a>
            </div>
            <div className="mb-12 p-4 transition duration-300 ease-in-out hover:bg-teal-300 hover:shadow-lg md:w-1/2">
              <a href={pdf2}>
                <div className="overflow-hidden rounded-md shadow-md">
                  <img src={C2} alt="landing-coding" width="w-full" />
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
