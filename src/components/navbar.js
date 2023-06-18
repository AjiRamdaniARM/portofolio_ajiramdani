import "../assets/styles.scss";
import { Link } from "react-scroll";

const Navbarari = () => {
  return (
    <div class="navbar bg-black/70 h-1 fixed">
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
      <a class=" font-bold text-white ml-5 normal-case text-xl font-family">ARI DEV</a>
    </div>
    <div class="navbar-center hidden lg:flex">
      <ul class="menu menu-horizontal px-1">
        <li> <Link to="Home" className=" flex h-[60px] w-[60px] cursor-pointer items-center justify-center text-white">
          Home</Link></li>
        <li>
        <Link to="Home" className=" flex h-[60px] w-[60px] cursor-pointer items-center justify-center text-white">
          Skill</Link>
        </li>
        <li> <Link to="Home" className=" flex h-[60px] w-[60px] cursor-pointer items-center justify-center text-white">
          Blog</Link></li>
      </ul>
    </div>
    <div class="navbar-end">
      <a class="btn button-style text-white w-auto lg:w-40  ">Contact</a>
    </div>
  </div>
  
         
  );
};

export default Navbarari;
