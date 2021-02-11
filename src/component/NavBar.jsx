import React from "react";
import { NavLink } from "react-router-dom";
// import { SocialIcon } from "react-social-icons";
import CoffeeSmug from "./svg-component/CoffeeSmug";

export default function NavBar() {
  return (
    <header className="nav-black-bg">
      <div className="container mx-auto flex justify-between">
        <nav className="flex">
          <NavLink
            to="/"
            activeClassName="text-white"
            className="inline-flex items-center py-6 px-3 mr-4 text-4xl font-bold cursive tracking-widest"
          >
            <CoffeeSmug />
          </NavLink>
          <NavLink
            to="/post"
            className="inline-flex items-center py-3 px-3 my-6 rounded text-gray-200 hover:text-yellow-200"
            activeClassName="text-gray-100 font-bold"
          >
            Blog
          </NavLink>
          <NavLink
            to="/project"
            className="inline-flex items-center py-3 px-3 my-6 rounded text-gray-200 hover:text-yellow-200"
            activeClassName="text-gray-100 font-bold"
          >
            Project
          </NavLink>
          <NavLink
            to="/about"
            className="inline-flex items-center py-3 px-3 my-6 rounded text-gray-200 hover:text-yellow-200"
            activeClassName="text-gray-100 font-bold"
          >
            About
          </NavLink>
        </nav>
        <div className="text-yellow-200 cursor-pointer inline-flex px-3 py-3 my-6">
          <span className="mr-3 hover:text-gray-200">English</span>
          <span className="hover:text-gray-200">Tiếng Việt</span>
          {/* <SocialIcon
            url="https://www.linkedin.com/in/tcdnguyen/"
            className="mr-4"
            target="_blank"
            fgColor="#fff"
            style={{ height: 35, width: 35 }}
          />
          <SocialIcon
            url="https://github.com/trancongduynguyen1997"
            className="mr-4"
            target="_blank"
            fgColor="#fff"
            style={{ height: 35, width: 35 }}
          />
          <SocialIcon
            url="https://www.facebook.com/TranCongDuyNguyen/"
            className="mr-4"
            target="_blank"
            fgColor="#fff"
            style={{ height: 35, width: 35 }}
          /> */}
        </div>
      </div>
    </header>
  );
}
