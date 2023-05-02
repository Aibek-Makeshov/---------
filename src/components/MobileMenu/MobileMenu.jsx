import React from "react";
import Filter from "../Filter/Filter";

export default function MobileMenu() {
  return (
    <div className=" pt-28 px-5 absolute top-0 left-0 right-0 bottom-0 bg-main z-10">
      <div>
        <menu className=" text-2xl font-bold">
          <nav>
            <ul className=" ">
              <li>
                <a href="/">Магазины</a>
              </li>
              <li>
                <a href="/">Акции</a>
              </li>
              <li>
                <a>Доставка и оплата</a>
              </li>
            </ul>
          </nav>
        </menu>
        <Filter />
      </div>
    </div>
  );
}
