import React from "react";
import "./cart.css";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/cartSlice";
import { Link } from "react-router-dom";

export default function Cart(props) {
  const dispatch = useDispatch();

  function handleAddToCart() {
    dispatch(
      addToCart({
        id: props.id,
        title: props.title,
        image: props.image,
        price: props.price,
        count: 1,
      })
    );
  }
  return (
    <div className="cart transition-all text-center bg-white p-4 relative">
      <img className="cart__image" src={props.image} alt="" />
      <p className=" mb-6 text-text_color">{props.title}</p>
      <p className=" text-3xl text-black font-bold">{props.price} сом</p>
      <div
        onClick={handleAddToCart}
        className=" absolute bottom-0 right-0 bg-blue-600 p-2 rounded-tl-lg cursor-pointer"
      >
        <img src="./images/Vector.svg" alt="" />
      </div>
      <Link to={`${props.id}`}>
        <div className="show-product absolute left-1/2 top-1/2 bg-white p-3 rounded-sm -translate-x-1/2 -translate-y-1/2">
          посмотреть товар
        </div>
      </Link>
    </div>
  );
}
