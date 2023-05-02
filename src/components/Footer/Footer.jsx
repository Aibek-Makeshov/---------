import React from "react";
import "./footer.css";

export default function Footer() {
  const ml = "ml-10";
  return (
    <div className=" flex gap-5 flex-wrap justify-between bg-main py-6 item-center container">
      <div className=" text-center max-w-xs">
        <div className=" text-black text-sm mb-8 font-bold max-w-xs">
          Подпишитесь на нашу рассылку и узнавайте об акциях быстрее
        </div>
        <form className=" flex flex-wrap">
          <input
            className=" h-8 focus:outline-none"
            type="email"
            placeholder="Введите Ваш E-mail"
          />
          <button className=" bg-blue-600 text-white p-1">Отправить</button>
        </form>
      </div>
      <div className={ml}>
        <div className=" font-bold">Информация</div>
        <div>О компании</div>
        <div>Контакты</div>
        <div>Акции</div>
        <div>Магазины</div>
      </div>
      <div className={ml}>
        <div className=" font-bold">Интернет-магазины</div>
        <div>Доставка и самовывоз</div>
        <div>Оплата</div>
        <div>Возврат-обмен</div>
        <div>Новости</div>
      </div>
      <div className=" flex gap-2">
        <div>
          <img className="w-10 h-10" src="./images/instagram.png" alt="" />
        </div>
        <div>
          <img className="w-10 h-10" src="./images/vk.png" alt="" />
        </div>
        <div>
          <img className="w-10 h-10" src="./images/facebook.png" alt="" />
        </div>
        <div>
          <img className="w-10 h-10" src="./images/youtube.png" alt="" />
        </div>
      </div>
    </div>
  );
}
