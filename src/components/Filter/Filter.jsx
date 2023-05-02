import React from "react";
import "./filter.css";

export default function Filter() {
  return (
    <div className=" flex flex-wrap justify-between gap-8 bg-main p-4 text-xl capitalize">
      <div>квадроциклы</div>
      <div>катера</div>
      <div>гидроциклы</div>
      <div>лодки</div>
      <div>вездеходы</div>
      <div>снегоходы</div>
      <div>двигатели</div>
      <div>запчасти</div>
    </div>
  );
}
