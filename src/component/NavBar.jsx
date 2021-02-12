import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";
import CoffeeSmug from "./svg-component/CoffeeSmug";

export default function NavBar() {
  const { t, i18n } = useTranslation();
  const [lang, setLang] = useState("vi");
  const changeLang = (langKey) => () => {
    i18n.changeLanguage(langKey);
    setLang(langKey);
  };

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
            {t("navBlog")}
          </NavLink>
          <NavLink
            to="/project"
            className="inline-flex items-center py-3 px-3 my-6 rounded text-gray-200 hover:text-yellow-200"
            activeClassName="text-gray-100 font-bold"
          >
            {t("navProject")}
          </NavLink>
          <NavLink
            to="/about"
            className="inline-flex items-center py-3 px-3 my-6 rounded text-gray-200 hover:text-yellow-200"
            activeClassName="text-gray-100 font-bold"
          >
            {t("navAbout")}
          </NavLink>
          <NavLink
            to="/contact"
            className="inline-flex items-center py-3 px-3 my-6 rounded text-gray-200 hover:text-yellow-200"
            activeClassName="text-gray-100 font-bold"
          >
            {t("navContact")}
          </NavLink>
        </nav>
        <div className="text-gray-200 cursor-pointer inline-flex px-3 py-3 my-6">
          <span
            className={`mr-3 hover:text-yellow-200 ${
              lang === "en" ? "text-yellow-200" : null
            }`}
            onClick={changeLang("en")}
          >
            English
          </span>
          <span
            className={`hover:text-yellow-200 ${
              lang === "vi" ? "text-yellow-200" : null
            }`}
            onClick={changeLang("vi")}
          >
            Tiếng Việt
          </span>
        </div>
      </div>
    </header>
  );
}
