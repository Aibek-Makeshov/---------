import React from "react";
import "./header.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import MobileMenu from "../MobileMenu/MobileMenu";
import { useState } from "react";

export default function Header() {
  const link = "text-xl font-bold";
  const count = useSelector((state) => state.cart.count);
  const [showMenu, setShowMenu] = React.useState(false);

  // чтоб при открытии меню не было возможности скролить

  if (showMenu) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "scroll";
  }

  // чтоб при открытии меню не было возможности скролить

  return (
    <div className=" flex items-center justify-between mb-5">
      <div className=" relative z-50">
        <Link to="/">
          <img className="" src="/images/logo.png" alt="" />
        </Link>
      </div>
      <menu className=" hidden sm:block">
        <nav>
          <ul className=" flex gap-4">
            <li>
              <a className={link} href="/">
                Магазины
              </a>
            </li>
            <li>
              <a className={link} href="/">
                Акции
              </a>
            </li>
            <li>
              <a href="/" className={link}>
                Доставка и оплата
              </a>
            </li>
          </ul>
        </nav>
      </menu>
      <div className=" flex gap-5 relative z-50">
        <Link className=" flex" to="/cart">
          <img src="/images/Vector.svg" alt="" />
          <span className=" w-6 h-6 rounded-full bg-blue-700 flex items-center justify-center text-white">
            {count}
          </span>
        </Link>
        <div className=" relative z-50" onClick={() => setShowMenu(!showMenu)}>
          <img
            className=" sm:hidden w-10 h-10 cursor-pointer"
            src="/images/menu.svg"
            alt=""
          />
        </div>
      </div>
      {showMenu ? <MobileMenu /> : null}
    </div>
  );
}
