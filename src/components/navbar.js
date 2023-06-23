import "../assets/styles.scss";
import { Link } from "react-scroll";
import Lencana from "../assets/image/Lencana.png";
import { Player } from '@lottiefiles/react-lottie-player';



const Navbarari = () => {
  const wa = "https://api.whatsapp.com/send?phone=6289508742700&text=Halo%20Kak%20Ari%20%F0%9F%91%8B%F0%9F%91%8B";
  return (
    <div class="navbar bg-white h-1 fixed shadow-lg z-10  ">
    <div class="navbar-start">
      <div class="dropdown">
        <label tabindex="0" class="btn btn-ghost lg:hidden">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
        </label>
        <ul tabindex="0" class="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
          <li>
            <ul class="p-2">
              <li><Link to="Home" className=" flex h-[60px] w-[60px] cursor-pointer items-center justify-center text-white">
          Skill</Link></li>
              <li><Link to="Home" className=" flex h-[60px] w-[60px] cursor-pointer items-center justify-center text-white">
          Blog</Link></li>
            </ul>
          </li>
          <li><Link to="Home" className=" flex h-[60px] w-[60px] cursor-pointer items-center justify-center text-white">
          Blog</Link></li>
        </ul>
      </div>
      <button onClick={()=>window.my_modal_5.showModal()} class=" font-bold text-blue-700 ml-5 normal-case text-xl font-family flex"> <img src={Lencana} width={30}/> ARI DEV </button>
      <dialog id="my_modal_5" className="modal">
  <form method="dialog" className="modal-box bg-white/70 ">
  <img src={Lencana} />
  </form>
  <form method="dialog" className="modal-backdrop">
    <button>close</button>
  </form>
</dialog>     
    </div>
    <div class="navbar-center hidden lg:flex">
      <ul class="menu menu-horizontal px-1 n-font">
        <li> <Link to="Home" className=" flex h-[60px] w-[60px] cursor-pointer items-center justify-center text-blue-700">
          Beranda</Link></li>&nbsp;
        <li>
        <Link to="Home" className=" flex h-[60px] w-[60px] cursor-pointer items-center justify-center  text-blue-700">
          Project</Link>
        </li>&nbsp;
        <li> <Link to="keahlian" className=" flex h-[60px] w-[60px] cursor-pointer items-center justify-center  text-blue-700">
          Keahlian</Link></li>&nbsp;&nbsp;
        <li> <Link to="aplikasi" className=" flex h-[60px] w-[60px] cursor-pointer items-center justify-center  text-blue-700">
          Aplikasi</Link></li>
      </ul>
    </div>
    <div class="navbar-end">
    <button type="button" data-ripple-light="true" className="btn bg-blue-500 rounded-full text-white w-auto lg:w-40 " onClick={()=>window.my_modal_4.showModal()}>Contact</button>
<dialog id="my_modal_4" className="modal bg-black/10 ">
  <form method="dialog" className="modal-box bg-white shadow-xl  ">
    <h3 className="font-bold  text-blue-900 text-center text-3xl">CONTACT US</h3>
    <p className="py-4">
    <Player
  autoplay
  loop
  src="https://assets6.lottiefiles.com/packages/lf20_isbiybfh.json"
  style={{ height: '300px', width: '300px' }}
>
</Player>
<div className="button-container"> <a href={wa} className="inline-flex items-center px-3 py-2 text-lg font-medium text-center text-white button-card1 rounded-full hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
           WhatsApp
            <svg aria-hidden="true" class="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
        </a>&nbsp;&nbsp;&nbsp;&nbsp;
        <button onClick='alert("sdsd")' className="inline-flex items-center px-3 py-2 text-lg font-medium text-center text-white button-card rounded-full hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
           Telegram
            <svg aria-hidden="true" class="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
        </button>
        </div>
    </p>
  </form>
  <form method="dialog" className="modal-backdrop">
    <button>close</button>
  </form>
</dialog>     
     
    </div>
   
  </div>
  
         
  );
};

export default Navbarari;
