import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";
import NavCollection from "./NavCollection";
import NavMenu from "./NavMenu";
import CoffeeSmug from "./svg-component/CoffeeSmug";

export default function NavBar() {
  const { i18n } = useTranslation();
  const [lang, setLang] = useState("vi");
  const changeLang = (langKey) => () => {
    i18n.changeLanguage(langKey);
    setLang(langKey);
  };

  return (
    <header className="nav-black-bg" style={{ fontSize: "0.8rem" }}>
      <div className="container mx-auto flex justify-between">
        <nav className="flex">
          <NavLink
            to="/"
            activeClassName="text-white"
            className="inline-flex items-center py-6 px-3 mr-4 text-4xl font-bold cursive tracking-widest"
          >
            <CoffeeSmug />
          </NavLink>
          <div className="hidden md:flex md:my-6  ">
            <NavCollection />
          </div>
        </nav>
        <div className="text-gray-200 cursor-pointer inline-flex px-3 py-3 my-6 flex items-center">
          <span
            className={`mr-3 hover:text-yellow-200 ${
              lang === "en" ? "font-bold" : null
            }`}
            onClick={changeLang("en")}
          >
            English
          </span>
          <span
            className={`hover:text-yellow-200 ${
              lang === "vi" ? "font-bold" : null
            }`}
            onClick={changeLang("vi")}
          >
            Tiếng Việt
          </span>
          <NavMenu />
        </div>
      </div>
    </header>
  );
}
