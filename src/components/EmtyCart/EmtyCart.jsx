import React from "react";
import "./emtyCart.css";
import { Link } from "react-router-dom";

export default function EmptyCart() {
  return (
    <div className=" grid-cols-3">
      <Link to="/">
        <img className=" h-32" src="./images/cart.svg" alt="" />
      </Link>
      <h1>Ой, пусто!</h1>
      <h2>Ваша корзина пуста, закажите товар с доставкой</h2>
    </div>
  );
}
