import "../assets/styles.scss";
import { Link } from "react-scroll";
import { Player } from '@lottiefiles/react-lottie-player';


const Navbarari = () => {

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
      <a class=" font-bold text-blue-700 ml-5 normal-case text-xl font-family">ARI DEV</a>
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
<dialog id="my_modal_4" className="modal">
  <form method="dialog" className="modal-box bg-white shadow-xl ">
    <h3 className="font-bold text-lg text-black">Contact Us</h3>
    <p className="py-4">
    <Player
    className="lg:w-24"
  autoplay
  loop
  src="https://assets6.lottiefiles.com/packages/lf20_isbiybfh.json"
  style={{ height: '300px', width: '300px' }}
>
</Player>
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
