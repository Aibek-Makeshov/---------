import "./App.css";
import Filter from "./components/Filter/Filter";
import Header from "./components/Header/Header";
import Cart from "./components/Cart/Cart";
// import { products } from "./products"
import Footer from "./components/Footer/Footer";
import { useSelector } from "react-redux";

export default function App() {
  const products = useSelector((state) => state.products);

  return (
    <div>
      <div className="container">
        <Header />
        <div className="filter-block hidden sm:block">
          <Filter />
        </div>
        <div className="goods">
          {products.map((item) => {
            return (
              <Cart
                id={item.id}
                title={item.title}
                price={item.price}
                image={item.image}
              />
            );
          })}
        </div>
      </div>
      <div className="bg-main">
        <Footer />
      </div>
    </div>
  );
}
