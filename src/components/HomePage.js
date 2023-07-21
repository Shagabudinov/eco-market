import SliderComponent from "./Slider";
import DataComponent from "../DataComponent";
import Sale from "./Sale";
import { useState } from "react";
import "../index.sass";

const HomePage = (props) => {
    
  const data = props.data;


  console.log(props.purchases);

  return (
    <div className="123">
      <SliderComponent />
      <p id="special-for-customers" className="center-container">
        Новинки
      </p>

      <Sale
        items={data}
        purchases={props.purchases}
        onPurchasesChange={props.onPurchasesChange}
        cartInfo={props.cartInfo}
        onCartInfoChange={props.onCartInfoChange}
      />
    </div>
  );
};

export default HomePage;
