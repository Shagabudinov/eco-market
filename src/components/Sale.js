import "./Sale.sass";
import ProductCard from "./ProductCard";
import { useState } from "react";

const Sale = (props) => {
  const itemList = props.items;
  console.log(`props:${props}`);

  return (
    <div className="sales-container">
      {itemList.map((item) => {
        if (item.sale) {
          return (
            <ProductCard
              key={item.id}
              {...item}
              purchases={props.purchases}
              onPurchasesChange={props.onPurchasesChange}
              //cartInfo={props.cartInfo}
              //onCartInfoChange={props.onCartInfoChange}
            />
          );
        }
        return null;
      })}
    </div>
  );
};

export default Sale;
