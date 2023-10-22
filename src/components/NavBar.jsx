import React from "react";
import avatar from "../assets/avatar.png";
const NavBar = () => {
  return (
    <div className="">
      <nav className="h-[10vh] bg-slate-900 flex justify-between items-center text-white py-5 px-20">
        <span className="text-2xl text-[#EEBE5F] font-bold">LOGO</span>
        <ul className="flex gap-10 text-[1rem]">
          <li className="hover:text-[#FEB633] transition cursor-pointer">
            Accueil
          </li>
          <li className="hover:text-[#FEB633] transition cursor-pointer">
            A propos
          </li>
          <li className="hover:text-[#FEB633] transition cursor-pointer">
            Skils
          </li>
          <li className="hover:text-[#FEB633] transition cursor-pointer">
            Projets
          </li>
          <li className="hover:text-[#FEB633] transition cursor-pointer">
            Contact
          </li>
        </ul>
      </nav>
      <div className="flex justify-center">
        <div className="w-1/2 text-white pt-[125px]">
          <span className="text-[20px] border-b-2 border-titleColor">
            Hello
          </span>
          <h1 className="text-[70px]">I'm Michael</h1>
          <p className="text-[24px]">
            Freelance Web & Mobile UI/UX
            <br />
            Designer
          </p>
          <button className="text-white text-xl mt-8 mb-10 bg-titleColor hover:bg-[#FEB633] px-[40px] py-[15px] rounded-md">
            Hire Me
          </button>
        </div>
        <div className="w-96">
          <img src={avatar} alt="Profil user" />
        </div>
      </div>
    </div>
  );
};

export default NavBar;
