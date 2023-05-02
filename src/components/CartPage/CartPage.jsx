import React from "react";
import "./cartPage.css";
import { useSelector } from "react-redux";
import { addToCart, removeFromCart } from "../../redux/cartSlice";
import { useDispatch } from "react-redux";
import EmptyCart from "../EmtyCart/EmtyCart";
import Header from "../Header/Header";

export default function CartPage() {
  const dispatch = useDispatch();
  const { totalPrice, products } = useSelector((state) => state.cart);

  function handleRemoveFromCart(product) {
    dispatch(removeFromCart(product));
  }

  function addProduct(product) {
    dispatch(addToCart(product));
  }

  return (
    <div>
      <div className="container">
        <Header />
      </div>
      <div className="container_a">
        {products.length === 0 ? (
          <EmptyCart />
        ) : (
          <div className=" flex justify-around">
            <div>
              {products.map((item) => {
                return (
                  <div className="block1">
                    <img className="product-image" src={item.image} alt="" />
                    <h3 className=" max-w-xs">{item.title}</h3>
                    <h4>{item.price}</h4>
                    <div className=" flex justify-between items-center gap-4 px-4 py-1 rounded-2xl border-gray-500 border w-36">
                      <div
                        onClick={() =>
                          handleRemoveFromCart({
                            price: item.price,
                            id: item.id,
                          })
                        }
                        className=" cursor-pointer text-lg p-2"
                      >
                        {item.count === 1 ? (
                          <img className=" w-4 h-4" src="/images/trash.svg" />
                        ) : (
                          "-"
                        )}
                      </div>
                      <div className="  rounded-s-2xl font-bold">
                        {item.count}
                      </div>
                      <div
                        onClick={() =>
                          addProduct({ id: item.id, price: item.price })
                        }
                        className=" p-2 cursor-pointer text-lg"
                      >
                        +
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="total">
              <div className=" text-center">
                <h5>Общая сумма:</h5>
                <h2>{totalPrice.toFixed(2)} $ </h2>
              </div>
              <button className="buy block ml-auto">купить</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
